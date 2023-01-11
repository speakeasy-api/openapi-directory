package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest {
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams pathParams;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest withPathParams(EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody request;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest withRequest(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody request) {
        this.request = request;
        return this;
    }
}