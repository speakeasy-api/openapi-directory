package openapisdk.models.operations;



public class GetChargersRequest {
    public GetChargersQueryParams queryParams;
    public GetChargersRequest withQueryParams(GetChargersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChargersSecurity security;
    public GetChargersRequest withSecurity(GetChargersSecurity security) {
        this.security = security;
        return this;
    }
}