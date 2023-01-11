package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateProjectRequest
 * Represents a request to the update project operation.
**/
public class UpdateProjectRequest {
    @JsonProperty("arn")
    public String arn;
    public UpdateProjectRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultJobTimeoutMinutes")
    public Long defaultJobTimeoutMinutes;
    public UpdateProjectRequest withDefaultJobTimeoutMinutes(Long defaultJobTimeoutMinutes) {
        this.defaultJobTimeoutMinutes = defaultJobTimeoutMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateProjectRequest withName(String name) {
        this.name = name;
        return this;
    }
}