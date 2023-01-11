package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreSecretRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public RestoreSecretRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}