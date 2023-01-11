package openapisdk.models.operations;



public class GetDelegationsRequest {
    public GetDelegationsQueryParams queryParams;
    public GetDelegationsRequest withQueryParams(GetDelegationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDelegationsHeaders headers;
    public GetDelegationsRequest withHeaders(GetDelegationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}