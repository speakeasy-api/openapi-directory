package openapisdk.models.operations;



public class CustomDemographicsListRequest {
    public CustomDemographicsListQueryParams queryParams;
    public CustomDemographicsListRequest withQueryParams(CustomDemographicsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CustomDemographicsListSecurity security;
    public CustomDemographicsListRequest withSecurity(CustomDemographicsListSecurity security) {
        this.security = security;
        return this;
    }
}