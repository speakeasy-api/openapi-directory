package openapisdk.models.operations;



public class GetStoryRequest {
    public GetStoryPathParams pathParams;
    public GetStoryRequest withPathParams(GetStoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStoryQueryParams queryParams;
    public GetStoryRequest withQueryParams(GetStoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}