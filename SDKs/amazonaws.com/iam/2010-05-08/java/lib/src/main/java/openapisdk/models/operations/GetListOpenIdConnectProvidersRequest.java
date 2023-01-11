package openapisdk.models.operations;



public class GetListOpenIdConnectProvidersRequest {
    public GetListOpenIdConnectProvidersQueryParams queryParams;
    public GetListOpenIdConnectProvidersRequest withQueryParams(GetListOpenIdConnectProvidersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListOpenIdConnectProvidersHeaders headers;
    public GetListOpenIdConnectProvidersRequest withHeaders(GetListOpenIdConnectProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
}