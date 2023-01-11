package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGraphqlApiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphqlApi")
    public GraphqlApi graphqlApi;
    public UpdateGraphqlApiResponse withGraphqlApi(GraphqlApi graphqlApi) {
        this.graphqlApi = graphqlApi;
        return this;
    }
}