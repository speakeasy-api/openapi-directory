package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagFilter
 * Used to filter the workflow executions in visibility APIs based on a tag.
**/
public class TagFilter {
    @JsonProperty("tag")
    public String tag;
    public TagFilter withTag(String tag) {
        this.tag = tag;
        return this;
    }
}