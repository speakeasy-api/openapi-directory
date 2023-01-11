package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTagsForResourceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ListTagsForResourceResult withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}