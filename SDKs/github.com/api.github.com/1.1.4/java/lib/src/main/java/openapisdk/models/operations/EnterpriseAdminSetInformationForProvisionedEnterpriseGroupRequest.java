package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest {
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams pathParams;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest withPathParams(EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody request;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest withRequest(EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody request) {
        this.request = request;
        return this;
    }
}