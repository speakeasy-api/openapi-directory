package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsRequest
 * Specifies a list of trail tags to return.
**/
public class ListTagsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTagsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ResourceIdList")
    public String[] resourceIdList;
    public ListTagsRequest withResourceIdList(String[] resourceIdList) {
        this.resourceIdList = resourceIdList;
        return this;
    }
}