package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequestBody {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public UntagResourceRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}