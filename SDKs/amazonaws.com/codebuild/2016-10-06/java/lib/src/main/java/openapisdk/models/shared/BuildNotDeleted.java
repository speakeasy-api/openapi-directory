package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildNotDeleted
 * Information about a build that could not be successfully deleted.
**/
public class BuildNotDeleted {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BuildNotDeleted withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public String statusCode;
    public BuildNotDeleted withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}