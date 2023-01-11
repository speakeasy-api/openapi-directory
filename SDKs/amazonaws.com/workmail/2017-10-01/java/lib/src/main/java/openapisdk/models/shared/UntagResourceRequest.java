package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public UntagResourceRequest withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}