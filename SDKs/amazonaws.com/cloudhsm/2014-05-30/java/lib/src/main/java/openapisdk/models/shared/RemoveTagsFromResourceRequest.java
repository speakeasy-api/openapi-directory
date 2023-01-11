package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveTagsFromResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public RemoveTagsFromResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagKeyList")
    public String[] tagKeyList;
    public RemoveTagsFromResourceRequest withTagKeyList(String[] tagKeyList) {
        this.tagKeyList = tagKeyList;
        return this;
    }
}