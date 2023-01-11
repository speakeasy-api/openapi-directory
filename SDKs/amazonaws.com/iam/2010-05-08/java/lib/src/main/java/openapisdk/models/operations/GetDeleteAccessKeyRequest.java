package openapisdk.models.operations;



public class GetDeleteAccessKeyRequest {
    public GetDeleteAccessKeyQueryParams queryParams;
    public GetDeleteAccessKeyRequest withQueryParams(GetDeleteAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeleteAccessKeyHeaders headers;
    public GetDeleteAccessKeyRequest withHeaders(GetDeleteAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
}