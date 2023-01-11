package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSecretRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public DescribeSecretRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}