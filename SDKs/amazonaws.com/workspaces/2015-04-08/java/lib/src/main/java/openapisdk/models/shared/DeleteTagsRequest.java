package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTagsRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public DeleteTagsRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public DeleteTagsRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}