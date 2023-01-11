package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGraphsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GraphList")
    public Graph[] graphList;
    public ListGraphsResponse withGraphList(Graph[] graphList) {
        this.graphList = graphList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGraphsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}