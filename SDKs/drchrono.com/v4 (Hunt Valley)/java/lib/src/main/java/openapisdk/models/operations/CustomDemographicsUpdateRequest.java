package openapisdk.models.operations;



public class CustomDemographicsUpdateRequest {
    public CustomDemographicsUpdatePathParams pathParams;
    public CustomDemographicsUpdateRequest withPathParams(CustomDemographicsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomDemographicsUpdateQueryParams queryParams;
    public CustomDemographicsUpdateRequest withQueryParams(CustomDemographicsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomDemographicsUpdateSecurity security;
    public CustomDemographicsUpdateRequest withSecurity(CustomDemographicsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}