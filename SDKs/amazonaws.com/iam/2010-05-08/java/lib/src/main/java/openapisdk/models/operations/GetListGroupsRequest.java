package openapisdk.models.operations;



public class GetListGroupsRequest {
    public GetListGroupsQueryParams queryParams;
    public GetListGroupsRequest withQueryParams(GetListGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListGroupsHeaders headers;
    public GetListGroupsRequest withHeaders(GetListGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}