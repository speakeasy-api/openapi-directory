package openapisdk.models.operations;



public class ListProvisionedConcurrencyConfigsRequest {
    public ListProvisionedConcurrencyConfigsPathParams pathParams;
    public ListProvisionedConcurrencyConfigsRequest withPathParams(ListProvisionedConcurrencyConfigsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListProvisionedConcurrencyConfigsQueryParams queryParams;
    public ListProvisionedConcurrencyConfigsRequest withQueryParams(ListProvisionedConcurrencyConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProvisionedConcurrencyConfigsHeaders headers;
    public ListProvisionedConcurrencyConfigsRequest withHeaders(ListProvisionedConcurrencyConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
}