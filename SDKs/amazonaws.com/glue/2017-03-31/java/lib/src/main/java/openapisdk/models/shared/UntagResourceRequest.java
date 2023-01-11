package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public UntagResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagsToRemove")
    public String[] tagsToRemove;
    public UntagResourceRequest withTagsToRemove(String[] tagsToRemove) {
        this.tagsToRemove = tagsToRemove;
        return this;
    }
}