package openapisdk.models.operations;



public class ListGroupUsersRequest {
    public ListGroupUsersPathParams pathParams;
    public ListGroupUsersRequest withPathParams(ListGroupUsersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListGroupUsersQueryParams queryParams;
    public ListGroupUsersRequest withQueryParams(ListGroupUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGroupUsersSecurity security;
    public ListGroupUsersRequest withSecurity(ListGroupUsersSecurity security) {
        this.security = security;
        return this;
    }
}