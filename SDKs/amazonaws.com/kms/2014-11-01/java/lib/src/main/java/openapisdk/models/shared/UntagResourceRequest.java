package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public UntagResourceRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}