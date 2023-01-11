package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public UntagResourceRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}