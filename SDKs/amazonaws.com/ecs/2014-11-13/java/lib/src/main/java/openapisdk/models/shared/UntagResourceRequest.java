package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public UntagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("tagKeys")
    public String[] tagKeys;
    public UntagResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}