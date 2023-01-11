package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveTagsFromResourceRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public RemoveTagsFromResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public RemoveTagsFromResourceRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}