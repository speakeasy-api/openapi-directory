package openapisdk.models.operations;



public class GetProvisionedConcurrencyConfigRequest {
    public GetProvisionedConcurrencyConfigPathParams pathParams;
    public GetProvisionedConcurrencyConfigRequest withPathParams(GetProvisionedConcurrencyConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProvisionedConcurrencyConfigQueryParams queryParams;
    public GetProvisionedConcurrencyConfigRequest withQueryParams(GetProvisionedConcurrencyConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProvisionedConcurrencyConfigHeaders headers;
    public GetProvisionedConcurrencyConfigRequest withHeaders(GetProvisionedConcurrencyConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}