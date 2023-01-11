package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsResponse
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
public class ListTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTagsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTagList")
    public ResourceTag[] resourceTagList;
    public ListTagsResponse withResourceTagList(ResourceTag[] resourceTagList) {
        this.resourceTagList = resourceTagList;
        return this;
    }
}