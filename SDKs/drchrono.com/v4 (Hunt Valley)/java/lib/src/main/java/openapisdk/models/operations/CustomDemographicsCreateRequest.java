package openapisdk.models.operations;



public class CustomDemographicsCreateRequest {
    public CustomDemographicsCreateQueryParams queryParams;
    public CustomDemographicsCreateRequest withQueryParams(CustomDemographicsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomDemographicsCreateSecurity security;
    public CustomDemographicsCreateRequest withSecurity(CustomDemographicsCreateSecurity security) {
        this.security = security;
        return this;
    }
}