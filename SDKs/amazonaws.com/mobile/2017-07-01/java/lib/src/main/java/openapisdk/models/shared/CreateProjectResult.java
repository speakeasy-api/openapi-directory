package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProjectResult
 *  Result structure used in response to a request to create a project. 
**/
public class CreateProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ProjectDetails details;
    public CreateProjectResult withDetails(ProjectDetails details) {
        this.details = details;
        return this;
    }
}