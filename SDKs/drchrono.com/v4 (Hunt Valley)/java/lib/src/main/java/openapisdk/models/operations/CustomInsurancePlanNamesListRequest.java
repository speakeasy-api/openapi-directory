package openapisdk.models.operations;



public class CustomInsurancePlanNamesListRequest {
    public CustomInsurancePlanNamesListQueryParams queryParams;
    public CustomInsurancePlanNamesListRequest withQueryParams(CustomInsurancePlanNamesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomInsurancePlanNamesListSecurity security;
    public CustomInsurancePlanNamesListRequest withSecurity(CustomInsurancePlanNamesListSecurity security) {
        this.security = security;
        return this;
    }
}