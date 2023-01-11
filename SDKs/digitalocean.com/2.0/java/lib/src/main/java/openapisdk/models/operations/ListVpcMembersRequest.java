package openapisdk.models.operations;



public class ListVpcMembersRequest {
    public ListVpcMembersPathParams pathParams;
    public ListVpcMembersRequest withPathParams(ListVpcMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVpcMembersQueryParams queryParams;
    public ListVpcMembersRequest withQueryParams(ListVpcMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}