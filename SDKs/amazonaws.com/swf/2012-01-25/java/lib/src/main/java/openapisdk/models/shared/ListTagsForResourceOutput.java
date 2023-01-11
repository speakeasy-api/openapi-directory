package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagsForResourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public ResourceTag[] tags;
    public ListTagsForResourceOutput withTags(ResourceTag[] tags) {
        this.tags = tags;
        return this;
    }
}