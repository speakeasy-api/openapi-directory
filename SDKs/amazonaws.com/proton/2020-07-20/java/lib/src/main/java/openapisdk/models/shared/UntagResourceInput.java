package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceInput {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public UntagResourceInput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("tagKeys")
    public String[] tagKeys;
    public UntagResourceInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}