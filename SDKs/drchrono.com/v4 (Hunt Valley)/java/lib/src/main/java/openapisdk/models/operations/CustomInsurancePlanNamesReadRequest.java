package openapisdk.models.operations;



public class CustomInsurancePlanNamesReadRequest {
    public CustomInsurancePlanNamesReadPathParams pathParams;
    public CustomInsurancePlanNamesReadRequest withPathParams(CustomInsurancePlanNamesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomInsurancePlanNamesReadQueryParams queryParams;
    public CustomInsurancePlanNamesReadRequest withQueryParams(CustomInsurancePlanNamesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomInsurancePlanNamesReadSecurity security;
    public CustomInsurancePlanNamesReadRequest withSecurity(CustomInsurancePlanNamesReadSecurity security) {
        this.security = security;
        return this;
    }
}