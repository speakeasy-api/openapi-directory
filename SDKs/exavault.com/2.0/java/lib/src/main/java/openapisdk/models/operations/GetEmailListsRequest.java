package openapisdk.models.operations;



public class GetEmailListsRequest {
    public GetEmailListsQueryParams queryParams;
    public GetEmailListsRequest withQueryParams(GetEmailListsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEmailListsHeaders headers;
    public GetEmailListsRequest withHeaders(GetEmailListsHeaders headers) {
        this.headers = headers;
        return this;
    }
}