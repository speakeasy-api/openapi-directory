package openapisdk.models.operations;



public class ListDomainConfigurationsRequest {
    public ListDomainConfigurationsQueryParams queryParams;
    public ListDomainConfigurationsRequest withQueryParams(ListDomainConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDomainConfigurationsHeaders headers;
    public ListDomainConfigurationsRequest withHeaders(ListDomainConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}