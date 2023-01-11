package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelRotateSecretRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public CancelRotateSecretRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}