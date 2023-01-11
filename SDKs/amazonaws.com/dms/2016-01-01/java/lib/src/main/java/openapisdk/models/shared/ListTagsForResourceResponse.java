package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForResourceResponse
 * <p/>
**/
public class ListTagsForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public ListTagsForResourceResponse withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}