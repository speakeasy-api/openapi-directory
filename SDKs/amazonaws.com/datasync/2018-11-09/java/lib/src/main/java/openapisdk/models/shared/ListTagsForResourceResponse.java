package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsForResourceResponse
 * ListTagsForResourceResponse
**/
public class ListTagsForResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTagsForResourceResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public TagListEntry[] tags;
    public ListTagsForResourceResponse withTags(TagListEntry[] tags) {
        this.tags = tags;
        return this;
    }
}