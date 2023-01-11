package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProjectResponse {
    @JsonProperty("projectArn")
    public String projectArn;
    public CreateProjectResponse withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public CreateProjectResponse withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}