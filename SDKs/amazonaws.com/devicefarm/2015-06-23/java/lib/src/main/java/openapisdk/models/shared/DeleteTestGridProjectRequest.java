package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTestGridProjectRequest {
    @JsonProperty("projectArn")
    public String projectArn;
    public DeleteTestGridProjectRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
}