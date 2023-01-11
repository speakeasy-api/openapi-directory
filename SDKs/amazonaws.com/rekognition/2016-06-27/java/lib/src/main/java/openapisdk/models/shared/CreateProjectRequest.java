package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateProjectRequest {
    @JsonProperty("ProjectName")
    public String projectName;
    public CreateProjectRequest withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}