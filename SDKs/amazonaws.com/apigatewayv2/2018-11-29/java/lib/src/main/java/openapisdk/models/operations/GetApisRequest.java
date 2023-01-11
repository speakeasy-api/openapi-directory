package openapisdk.models.operations;



public class GetApisRequest {
    public GetApisQueryParams queryParams;
    public GetApisRequest withQueryParams(GetApisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApisHeaders headers;
    public GetApisRequest withHeaders(GetApisHeaders headers) {
        this.headers = headers;
        return this;
    }
}