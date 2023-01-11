package openapisdk.models.operations;



public class GetComponentRequest {
    public GetComponentQueryParams queryParams;
    public GetComponentRequest withQueryParams(GetComponentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComponentHeaders headers;
    public GetComponentRequest withHeaders(GetComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}