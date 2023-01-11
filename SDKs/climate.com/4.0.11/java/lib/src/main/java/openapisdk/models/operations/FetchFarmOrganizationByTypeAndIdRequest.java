package openapisdk.models.operations;



public class FetchFarmOrganizationByTypeAndIdRequest {
    public FetchFarmOrganizationByTypeAndIdPathParams pathParams;
    public FetchFarmOrganizationByTypeAndIdRequest withPathParams(FetchFarmOrganizationByTypeAndIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFarmOrganizationByTypeAndIdSecurity security;
    public FetchFarmOrganizationByTypeAndIdRequest withSecurity(FetchFarmOrganizationByTypeAndIdSecurity security) {
        this.security = security;
        return this;
    }
}