package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteResourcePolicyRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public DeleteResourcePolicyRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}