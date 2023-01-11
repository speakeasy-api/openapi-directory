package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTestGridUrlRequest {
    @JsonProperty("expiresInSeconds")
    public Long expiresInSeconds;
    public CreateTestGridUrlRequest withExpiresInSeconds(Long expiresInSeconds) {
        this.expiresInSeconds = expiresInSeconds;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public CreateTestGridUrlRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
}