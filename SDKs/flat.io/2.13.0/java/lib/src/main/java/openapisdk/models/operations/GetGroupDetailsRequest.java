package openapisdk.models.operations;



public class GetGroupDetailsRequest {
    public GetGroupDetailsPathParams pathParams;
    public GetGroupDetailsRequest withPathParams(GetGroupDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupDetailsSecurity security;
    public GetGroupDetailsRequest withSecurity(GetGroupDetailsSecurity security) {
        this.security = security;
        return this;
    }
}