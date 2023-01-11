package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequestBody {
    @JsonProperty("Arn")
    public String arn;
    public UntagResourceRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourceRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}