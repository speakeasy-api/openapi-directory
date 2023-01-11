package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequestBody {
    @JsonProperty("tagKeys")
    public String[] tagKeys;
    public UntagResourceRequestBody withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}