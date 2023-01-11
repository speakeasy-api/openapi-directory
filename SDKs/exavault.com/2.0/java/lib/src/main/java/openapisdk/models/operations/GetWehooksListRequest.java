package openapisdk.models.operations;



public class GetWehooksListRequest {
    public GetWehooksListQueryParams queryParams;
    public GetWehooksListRequest withQueryParams(GetWehooksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWehooksListHeaders headers;
    public GetWehooksListRequest withHeaders(GetWehooksListHeaders headers) {
        this.headers = headers;
        return this;
    }
}