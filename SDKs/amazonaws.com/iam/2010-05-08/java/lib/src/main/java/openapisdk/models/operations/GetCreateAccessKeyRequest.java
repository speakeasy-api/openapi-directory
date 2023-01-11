package openapisdk.models.operations;



public class GetCreateAccessKeyRequest {
    public GetCreateAccessKeyQueryParams queryParams;
    public GetCreateAccessKeyRequest withQueryParams(GetCreateAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreateAccessKeyHeaders headers;
    public GetCreateAccessKeyRequest withHeaders(GetCreateAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}