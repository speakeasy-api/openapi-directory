package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceRequest {
    @JsonProperty("SecretId")
    public String secretId;
    public TagResourceRequest withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public TagResourceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}