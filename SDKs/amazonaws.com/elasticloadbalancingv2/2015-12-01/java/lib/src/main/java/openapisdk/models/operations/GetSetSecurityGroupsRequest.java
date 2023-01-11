package openapisdk.models.operations;



public class GetSetSecurityGroupsRequest {
    public GetSetSecurityGroupsQueryParams queryParams;
    public GetSetSecurityGroupsRequest withQueryParams(GetSetSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetSecurityGroupsHeaders headers;
    public GetSetSecurityGroupsRequest withHeaders(GetSetSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}