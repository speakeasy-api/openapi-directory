package openapisdk.models.operations;



public class GetTestFailoverRequest {
    public GetTestFailoverQueryParams queryParams;
    public GetTestFailoverRequest withQueryParams(GetTestFailoverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTestFailoverHeaders headers;
    public GetTestFailoverRequest withHeaders(GetTestFailoverHeaders headers) {
        this.headers = headers;
        return this;
    }
}