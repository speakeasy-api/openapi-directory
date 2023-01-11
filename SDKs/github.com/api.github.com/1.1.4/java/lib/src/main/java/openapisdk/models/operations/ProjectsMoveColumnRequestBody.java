package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsMoveColumnRequestBody {
    @JsonProperty("position")
    public String position;
    public ProjectsMoveColumnRequestBody withPosition(String position) {
        this.position = position;
        return this;
    }
}