package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateProjectResult
 *  Result structure used for requests to updated project configuration. 
**/
public class UpdateProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ProjectDetails details;
    public UpdateProjectResult withDetails(ProjectDetails details) {
        this.details = details;
        return this;
    }
}