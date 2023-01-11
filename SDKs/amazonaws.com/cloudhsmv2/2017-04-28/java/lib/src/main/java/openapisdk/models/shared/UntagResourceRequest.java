package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public UntagResourceRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("TagKeyList")
    public String[] tagKeyList;
    public UntagResourceRequest withTagKeyList(String[] tagKeyList) {
        this.tagKeyList = tagKeyList;
        return this;
    }
}