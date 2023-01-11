package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetResourcePolicyRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public GetResourcePolicyRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}