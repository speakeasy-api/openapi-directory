package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateOrgNameRequest {
    public EnterpriseAdminUpdateOrgNamePathParams pathParams;
    public EnterpriseAdminUpdateOrgNameRequest withPathParams(EnterpriseAdminUpdateOrgNamePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateOrgNameRequestBody request;
    public EnterpriseAdminUpdateOrgNameRequest withRequest(EnterpriseAdminUpdateOrgNameRequestBody request) {
        this.request = request;
        return this;
    }
}