package openapisdk.models.operations;



public class ListLaunchProfilesRequest {
    public ListLaunchProfilesPathParams pathParams;
    public ListLaunchProfilesRequest withPathParams(ListLaunchProfilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListLaunchProfilesQueryParams queryParams;
    public ListLaunchProfilesRequest withQueryParams(ListLaunchProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLaunchProfilesHeaders headers;
    public ListLaunchProfilesRequest withHeaders(ListLaunchProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}