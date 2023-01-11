package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest {
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams pathParams;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest withPathParams(EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody request;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest withRequest(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody request) {
        this.request = request;
        return this;
    }
}