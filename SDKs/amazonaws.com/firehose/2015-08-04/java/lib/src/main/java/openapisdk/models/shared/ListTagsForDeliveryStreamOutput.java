package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForDeliveryStreamOutput {
    @JsonProperty("HasMoreTags")
    public Boolean hasMoreTags;
    public ListTagsForDeliveryStreamOutput withHasMoreTags(Boolean hasMoreTags) {
        this.hasMoreTags = hasMoreTags;
        return this;
    }
    @JsonProperty("Tags")
    public Tag[] tags;
    public ListTagsForDeliveryStreamOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}