package openapisdk.models.operations;



public class GetGetSessionTokenRequest {
    public GetGetSessionTokenQueryParams queryParams;
    public GetGetSessionTokenRequest withQueryParams(GetGetSessionTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGetSessionTokenHeaders headers;
    public GetGetSessionTokenRequest withHeaders(GetGetSessionTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
}