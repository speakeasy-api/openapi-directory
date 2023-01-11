package openapisdk.models.operations;



public class ListFargateProfilesRequest {
    public ListFargateProfilesPathParams pathParams;
    public ListFargateProfilesRequest withPathParams(ListFargateProfilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFargateProfilesQueryParams queryParams;
    public ListFargateProfilesRequest withQueryParams(ListFargateProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFargateProfilesHeaders headers;
    public ListFargateProfilesRequest withHeaders(ListFargateProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}