package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequestBody {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public UntagResourceRequestBody withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}