package openapisdk.models.operations;



public class GetActivitiesRequest {
    public String serverURL;
    public GetActivitiesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public GetActivitiesPathParams pathParams;
    public GetActivitiesRequest withPathParams(GetActivitiesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetActivitiesSecurity security;
    public GetActivitiesRequest withSecurity(GetActivitiesSecurity security) {
        this.security = security;
        return this;
    }
}