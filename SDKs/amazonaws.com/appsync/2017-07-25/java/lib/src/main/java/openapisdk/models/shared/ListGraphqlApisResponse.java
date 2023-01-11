package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGraphqlApisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphqlApis")
    public GraphqlApi[] graphqlApis;
    public ListGraphqlApisResponse withGraphqlApis(GraphqlApi[] graphqlApis) {
        this.graphqlApis = graphqlApis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListGraphqlApisResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}