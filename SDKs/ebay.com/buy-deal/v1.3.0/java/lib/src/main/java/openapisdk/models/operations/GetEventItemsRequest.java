package openapisdk.models.operations;



public class GetEventItemsRequest {
    public GetEventItemsQueryParams queryParams;
    public GetEventItemsRequest withQueryParams(GetEventItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEventItemsHeaders headers;
    public GetEventItemsRequest withHeaders(GetEventItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventItemsSecurity security;
    public GetEventItemsRequest withSecurity(GetEventItemsSecurity security) {
        this.security = security;
        return this;
    }
}