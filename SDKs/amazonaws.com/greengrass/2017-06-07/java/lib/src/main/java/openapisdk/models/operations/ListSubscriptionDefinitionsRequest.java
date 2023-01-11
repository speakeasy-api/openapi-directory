package openapisdk.models.operations;



public class ListSubscriptionDefinitionsRequest {
    public ListSubscriptionDefinitionsQueryParams queryParams;
    public ListSubscriptionDefinitionsRequest withQueryParams(ListSubscriptionDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSubscriptionDefinitionsHeaders headers;
    public ListSubscriptionDefinitionsRequest withHeaders(ListSubscriptionDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}