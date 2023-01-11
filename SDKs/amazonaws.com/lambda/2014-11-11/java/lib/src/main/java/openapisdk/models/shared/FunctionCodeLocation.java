package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionCodeLocation
 * The object for the Lambda function location.
**/
public class FunctionCodeLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public FunctionCodeLocation withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepositoryType")
    public String repositoryType;
    public FunctionCodeLocation withRepositoryType(String repositoryType) {
        this.repositoryType = repositoryType;
        return this;
    }
}