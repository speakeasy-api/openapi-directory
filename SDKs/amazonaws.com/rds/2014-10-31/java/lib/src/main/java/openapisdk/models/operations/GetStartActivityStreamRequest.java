package openapisdk.models.operations;



public class GetStartActivityStreamRequest {
    public GetStartActivityStreamQueryParams queryParams;
    public GetStartActivityStreamRequest withQueryParams(GetStartActivityStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStartActivityStreamHeaders headers;
    public GetStartActivityStreamRequest withHeaders(GetStartActivityStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}