package openapisdk.models.operations;



public class GetListRolesRequest {
    public GetListRolesQueryParams queryParams;
    public GetListRolesRequest withQueryParams(GetListRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListRolesHeaders headers;
    public GetListRolesRequest withHeaders(GetListRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
}