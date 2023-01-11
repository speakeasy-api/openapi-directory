package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagsModel
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
**/
public class TagsModel {
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public TagsModel withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}