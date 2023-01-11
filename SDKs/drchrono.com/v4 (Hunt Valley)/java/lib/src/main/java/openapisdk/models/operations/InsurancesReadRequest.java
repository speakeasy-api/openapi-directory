package openapisdk.models.operations;



public class InsurancesReadRequest {
    public InsurancesReadPathParams pathParams;
    public InsurancesReadRequest withPathParams(InsurancesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InsurancesReadQueryParams queryParams;
    public InsurancesReadRequest withQueryParams(InsurancesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InsurancesReadSecurity security;
    public InsurancesReadRequest withSecurity(InsurancesReadSecurity security) {
        this.security = security;
        return this;
    }
}