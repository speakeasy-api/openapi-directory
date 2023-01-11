package openapisdk.models.operations;



public class ActivitiesDeleteRequest {
    public ActivitiesDeletePathParams pathParams;
    public ActivitiesDeleteRequest withPathParams(ActivitiesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActivitiesDeleteQueryParams queryParams;
    public ActivitiesDeleteRequest withQueryParams(ActivitiesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActivitiesDeleteHeaders headers;
    public ActivitiesDeleteRequest withHeaders(ActivitiesDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ActivitiesDeleteSecurity security;
    public ActivitiesDeleteRequest withSecurity(ActivitiesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}