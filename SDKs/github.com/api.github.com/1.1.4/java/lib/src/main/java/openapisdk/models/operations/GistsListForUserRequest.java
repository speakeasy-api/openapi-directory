package openapisdk.models.operations;



public class GistsListForUserRequest {
    public GistsListForUserPathParams pathParams;
    public GistsListForUserRequest withPathParams(GistsListForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GistsListForUserQueryParams queryParams;
    public GistsListForUserRequest withQueryParams(GistsListForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}