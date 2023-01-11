package openapisdk.models.operations;



public class UsersGetLogsRequest {
    public UsersGetLogsPathParams pathParams;
    public UsersGetLogsRequest withPathParams(UsersGetLogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetLogsSecurity security;
    public UsersGetLogsRequest withSecurity(UsersGetLogsSecurity security) {
        this.security = security;
        return this;
    }
}