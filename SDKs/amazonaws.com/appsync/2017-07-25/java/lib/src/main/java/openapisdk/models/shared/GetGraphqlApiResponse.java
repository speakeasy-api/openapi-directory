package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGraphqlApiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphqlApi")
    public GraphqlApi graphqlApi;
    public GetGraphqlApiResponse withGraphqlApi(GraphqlApi graphqlApi) {
        this.graphqlApi = graphqlApi;
        return this;
    }
}