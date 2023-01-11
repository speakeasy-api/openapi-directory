package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateInstitutionAccountGroupRolesCreateRequest {
    public PrivateInstitutionAccountGroupRolesCreatePathParams pathParams;
    public PrivateInstitutionAccountGroupRolesCreateRequest withPathParams(PrivateInstitutionAccountGroupRolesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PrivateInstitutionAccountGroupRolesCreateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public PrivateInstitutionAccountGroupRolesCreateSecurity security;
    public PrivateInstitutionAccountGroupRolesCreateRequest withSecurity(PrivateInstitutionAccountGroupRolesCreateSecurity security) {
        this.security = security;
        return this;
    }
}