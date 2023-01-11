package openapisdk.models.operations;



public class GetResourceInfoRequest {
    public GetResourceInfoQueryParams queryParams;
    public GetResourceInfoRequest withQueryParams(GetResourceInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourceInfoHeaders headers;
    public GetResourceInfoRequest withHeaders(GetResourceInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
}