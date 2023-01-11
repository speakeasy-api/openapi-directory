package openapisdk.models.operations;



public class TeamsDeleteRequest {
    public TeamsDeletePathParams pathParams;
    public TeamsDeleteRequest withPathParams(TeamsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TeamsDeleteSecurity security;
    public TeamsDeleteRequest withSecurity(TeamsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}