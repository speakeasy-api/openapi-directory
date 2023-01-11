package openapisdk.models.operations;



public class OrgsListForUserRequest {
    public OrgsListForUserPathParams pathParams;
    public OrgsListForUserRequest withPathParams(OrgsListForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OrgsListForUserQueryParams queryParams;
    public OrgsListForUserRequest withQueryParams(OrgsListForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}