package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest {
    public EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams pathParams;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequest withPathParams(EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody request;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequest withRequest(EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody request) {
        this.request = request;
        return this;
    }
}