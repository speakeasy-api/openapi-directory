package openapisdk.models.operations;



public class GetSubscriptionDefinitionVersionRequest {
    public GetSubscriptionDefinitionVersionPathParams pathParams;
    public GetSubscriptionDefinitionVersionRequest withPathParams(GetSubscriptionDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubscriptionDefinitionVersionQueryParams queryParams;
    public GetSubscriptionDefinitionVersionRequest withQueryParams(GetSubscriptionDefinitionVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSubscriptionDefinitionVersionHeaders headers;
    public GetSubscriptionDefinitionVersionRequest withHeaders(GetSubscriptionDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}