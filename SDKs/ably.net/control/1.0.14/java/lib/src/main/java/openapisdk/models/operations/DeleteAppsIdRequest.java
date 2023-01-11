package openapisdk.models.operations;



public class DeleteAppsIdRequest {
    public DeleteAppsIdPathParams pathParams;
    public DeleteAppsIdRequest withPathParams(DeleteAppsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAppsIdSecurity security;
    public DeleteAppsIdRequest withSecurity(DeleteAppsIdSecurity security) {
        this.security = security;
        return this;
    }
}