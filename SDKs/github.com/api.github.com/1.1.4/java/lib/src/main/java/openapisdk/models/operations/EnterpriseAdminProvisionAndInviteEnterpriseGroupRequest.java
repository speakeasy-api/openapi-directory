package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest {
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams pathParams;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest withPathParams(EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody request;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest withRequest(EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody request) {
        this.request = request;
        return this;
    }
}