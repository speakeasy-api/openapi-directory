package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourcesInput {
    @JsonProperty("ResourceARNList")
    public String[] resourceARNList;
    public UntagResourcesInput withResourceArnList(String[] resourceARNList) {
        this.resourceARNList = resourceARNList;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public UntagResourcesInput withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}