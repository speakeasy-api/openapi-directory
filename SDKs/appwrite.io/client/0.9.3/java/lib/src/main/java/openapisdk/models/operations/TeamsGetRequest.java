package openapisdk.models.operations;



public class TeamsGetRequest {
    public TeamsGetPathParams pathParams;
    public TeamsGetRequest withPathParams(TeamsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsGetSecurity security;
    public TeamsGetRequest withSecurity(TeamsGetSecurity security) {
        this.security = security;
        return this;
    }
}