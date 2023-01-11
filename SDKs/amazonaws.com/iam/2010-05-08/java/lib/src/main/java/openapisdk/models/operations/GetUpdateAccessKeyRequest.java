package openapisdk.models.operations;



public class GetUpdateAccessKeyRequest {
    public GetUpdateAccessKeyQueryParams queryParams;
    public GetUpdateAccessKeyRequest withQueryParams(GetUpdateAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdateAccessKeyHeaders headers;
    public GetUpdateAccessKeyRequest withHeaders(GetUpdateAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}