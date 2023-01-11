package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTagsForStreamOutput
 * Represents the output for <code>ListTagsForStream</code>.
**/
public class ListTagsForStreamOutput {
    @JsonProperty("HasMoreTags")
    public Boolean hasMoreTags;
    public ListTagsForStreamOutput withHasMoreTags(Boolean hasMoreTags) {
        this.hasMoreTags = hasMoreTags;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public ListTagsForStreamOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}