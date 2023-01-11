package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateLdapMappingForUserRequest {
    public EnterpriseAdminUpdateLdapMappingForUserPathParams pathParams;
    public EnterpriseAdminUpdateLdapMappingForUserRequest withPathParams(EnterpriseAdminUpdateLdapMappingForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateLdapMappingForUserRequestBody request;
    public EnterpriseAdminUpdateLdapMappingForUserRequest withRequest(EnterpriseAdminUpdateLdapMappingForUserRequestBody request) {
        this.request = request;
        return this;
    }
}