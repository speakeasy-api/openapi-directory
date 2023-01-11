package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveTagsFromResourceMessage
 * Removes one or more tags from an DMS resource.
**/
public class RemoveTagsFromResourceMessage {
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public RemoveTagsFromResourceMessage withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("TagKeys")
    public String[] tagKeys;
    public RemoveTagsFromResourceMessage withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}