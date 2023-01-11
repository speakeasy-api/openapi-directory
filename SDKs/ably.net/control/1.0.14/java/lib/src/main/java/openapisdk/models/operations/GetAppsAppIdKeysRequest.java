package openapisdk.models.operations;



public class GetAppsAppIdKeysRequest {
    public GetAppsAppIdKeysPathParams pathParams;
    public GetAppsAppIdKeysRequest withPathParams(GetAppsAppIdKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppsAppIdKeysSecurity security;
    public GetAppsAppIdKeysRequest withSecurity(GetAppsAppIdKeysSecurity security) {
        this.security = security;
        return this;
    }
}