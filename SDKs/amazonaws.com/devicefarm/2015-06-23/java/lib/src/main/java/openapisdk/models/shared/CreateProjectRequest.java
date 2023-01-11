package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProjectRequest
 * Represents a request to the create project operation.
**/
public class CreateProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultJobTimeoutMinutes")
    public Long defaultJobTimeoutMinutes;
    public CreateProjectRequest withDefaultJobTimeoutMinutes(Long defaultJobTimeoutMinutes) {
        this.defaultJobTimeoutMinutes = defaultJobTimeoutMinutes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateProjectRequest withName(String name) {
        this.name = name;
        return this;
    }
}