package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopProjectVersionRequest {
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public StopProjectVersionRequest withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
}