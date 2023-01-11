package openapisdk.models.operations;



public class GetBlacklistReportsRequest {
    public GetBlacklistReportsQueryParams queryParams;
    public GetBlacklistReportsRequest withQueryParams(GetBlacklistReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBlacklistReportsHeaders headers;
    public GetBlacklistReportsRequest withHeaders(GetBlacklistReportsHeaders headers) {
        this.headers = headers;
        return this;
    }
}