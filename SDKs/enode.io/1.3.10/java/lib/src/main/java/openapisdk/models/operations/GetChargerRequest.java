package openapisdk.models.operations;



public class GetChargerRequest {
    public GetChargerPathParams pathParams;
    public GetChargerRequest withPathParams(GetChargerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChargerQueryParams queryParams;
    public GetChargerRequest withQueryParams(GetChargerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChargerSecurity security;
    public GetChargerRequest withSecurity(GetChargerSecurity security) {
        this.security = security;
        return this;
    }
}