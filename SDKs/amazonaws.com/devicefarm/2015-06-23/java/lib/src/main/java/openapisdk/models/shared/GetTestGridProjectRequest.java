package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTestGridProjectRequest {
    @JsonProperty("projectArn")
    public String projectArn;
    public GetTestGridProjectRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
}