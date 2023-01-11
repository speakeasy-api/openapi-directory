package openapisdk.models.operations;



public class GetListGroupsForUserRequest {
    public GetListGroupsForUserQueryParams queryParams;
    public GetListGroupsForUserRequest withQueryParams(GetListGroupsForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListGroupsForUserHeaders headers;
    public GetListGroupsForUserRequest withHeaders(GetListGroupsForUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}