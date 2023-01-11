package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProjectVersionRequest {
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public DeleteProjectVersionRequest withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
}