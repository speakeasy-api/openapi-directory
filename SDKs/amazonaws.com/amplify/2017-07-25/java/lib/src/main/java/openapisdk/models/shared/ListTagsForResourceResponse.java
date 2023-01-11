package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForResourceResponse
 *  The response for the list tags for resource request. 
**/
public class ListTagsForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ListTagsForResourceResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}