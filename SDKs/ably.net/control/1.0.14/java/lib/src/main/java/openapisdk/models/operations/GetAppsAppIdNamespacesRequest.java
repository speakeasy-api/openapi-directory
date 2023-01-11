package openapisdk.models.operations;



public class GetAppsAppIdNamespacesRequest {
    public GetAppsAppIdNamespacesPathParams pathParams;
    public GetAppsAppIdNamespacesRequest withPathParams(GetAppsAppIdNamespacesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppsAppIdNamespacesSecurity security;
    public GetAppsAppIdNamespacesRequest withSecurity(GetAppsAppIdNamespacesSecurity security) {
        this.security = security;
        return this;
    }
}