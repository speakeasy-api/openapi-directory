package openapisdk.models.operations;



public class CustomDemographicsPartialUpdateRequest {
    public CustomDemographicsPartialUpdatePathParams pathParams;
    public CustomDemographicsPartialUpdateRequest withPathParams(CustomDemographicsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CustomDemographicsPartialUpdateQueryParams queryParams;
    public CustomDemographicsPartialUpdateRequest withQueryParams(CustomDemographicsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomDemographicsPartialUpdateSecurity security;
    public CustomDemographicsPartialUpdateRequest withSecurity(CustomDemographicsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}