package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMlTransformsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMlTransformsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("TransformIds")
    public String[] transformIds;
    public ListMlTransformsResponse withTransformIds(String[] transformIds) {
        this.transformIds = transformIds;
        return this;
    }
}