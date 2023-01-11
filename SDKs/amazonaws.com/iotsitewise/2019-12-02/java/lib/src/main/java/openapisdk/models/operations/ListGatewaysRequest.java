package openapisdk.models.operations;



public class ListGatewaysRequest {
    public ListGatewaysQueryParams queryParams;
    public ListGatewaysRequest withQueryParams(ListGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGatewaysHeaders headers;
    public ListGatewaysRequest withHeaders(ListGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
}