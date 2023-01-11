package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagResourceRequestBodyTagsModel
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
**/
public class TagResourceRequestBodyTagsModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public TagResourceRequestBodyTagsModel withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}