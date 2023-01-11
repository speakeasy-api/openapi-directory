package openapisdk.models.operations;



public class GetTimeRequest {
    public GetTimeQueryParams queryParams;
    public GetTimeRequest withQueryParams(GetTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTimeHeaders headers;
    public GetTimeRequest withHeaders(GetTimeHeaders headers) {
        this.headers = headers;
        return this;
    }
}