package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddTagsToResourceMessage
 * Associates a set of tags with an DMS resource.
**/
public class AddTagsToResourceMessage {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public AddTagsToResourceMessage withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public AddTagsToResourceMessage withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}