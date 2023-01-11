package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourcesInput {
    @JsonProperty("ResourceARNList")
    public String[] resourceARNList;
    public TagResourcesInput withResourceArnList(String[] resourceARNList) {
        this.resourceARNList = resourceARNList;
        return this;
    }
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public TagResourcesInput withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}