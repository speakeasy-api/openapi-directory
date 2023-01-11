package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequestBody {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public UntagResourceRequestBody withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("TagKeyList")
    public String[] tagKeyList;
    public UntagResourceRequestBody withTagKeyList(String[] tagKeyList) {
        this.tagKeyList = tagKeyList;
        return this;
    }
}