package openapisdk.models.operations;



public class ListSubscriptionDefinitionVersionsRequest {
    public ListSubscriptionDefinitionVersionsPathParams pathParams;
    public ListSubscriptionDefinitionVersionsRequest withPathParams(ListSubscriptionDefinitionVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSubscriptionDefinitionVersionsQueryParams queryParams;
    public ListSubscriptionDefinitionVersionsRequest withQueryParams(ListSubscriptionDefinitionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSubscriptionDefinitionVersionsHeaders headers;
    public ListSubscriptionDefinitionVersionsRequest withHeaders(ListSubscriptionDefinitionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}