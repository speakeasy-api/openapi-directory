package openapisdk.models.operations;



public class PrivateAccountInstitutionUserRequest {
    public PrivateAccountInstitutionUserPathParams pathParams;
    public PrivateAccountInstitutionUserRequest withPathParams(PrivateAccountInstitutionUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateAccountInstitutionUserSecurity security;
    public PrivateAccountInstitutionUserRequest withSecurity(PrivateAccountInstitutionUserSecurity security) {
        this.security = security;
        return this;
    }
}