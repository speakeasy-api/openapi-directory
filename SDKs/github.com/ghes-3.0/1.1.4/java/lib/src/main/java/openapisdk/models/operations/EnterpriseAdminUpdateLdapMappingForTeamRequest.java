package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateLdapMappingForTeamRequest {
    public EnterpriseAdminUpdateLdapMappingForTeamPathParams pathParams;
    public EnterpriseAdminUpdateLdapMappingForTeamRequest withPathParams(EnterpriseAdminUpdateLdapMappingForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateLdapMappingForTeamRequestBody request;
    public EnterpriseAdminUpdateLdapMappingForTeamRequest withRequest(EnterpriseAdminUpdateLdapMappingForTeamRequestBody request) {
        this.request = request;
        return this;
    }
}