package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProjectRequest {
    @JsonProperty("ProjectArn")
    public String projectArn;
    public DeleteProjectRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
}