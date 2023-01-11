package openapisdk.models.operations;



public class PrivateInstitutionAccountGroupRolesRequest {
    public PrivateInstitutionAccountGroupRolesPathParams pathParams;
    public PrivateInstitutionAccountGroupRolesRequest withPathParams(PrivateInstitutionAccountGroupRolesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateInstitutionAccountGroupRolesSecurity security;
    public PrivateInstitutionAccountGroupRolesRequest withSecurity(PrivateInstitutionAccountGroupRolesSecurity security) {
        this.security = security;
        return this;
    }
}