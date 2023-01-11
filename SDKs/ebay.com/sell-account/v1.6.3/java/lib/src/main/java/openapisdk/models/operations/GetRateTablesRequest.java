package openapisdk.models.operations;



public class GetRateTablesRequest {
    public GetRateTablesQueryParams queryParams;
    public GetRateTablesRequest withQueryParams(GetRateTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRateTablesSecurity security;
    public GetRateTablesRequest withSecurity(GetRateTablesSecurity security) {
        this.security = security;
        return this;
    }
}