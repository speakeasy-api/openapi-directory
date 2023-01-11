package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest {
    public EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams pathParams;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserRequest withPathParams(EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody request;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserRequest withRequest(EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody request) {
        this.request = request;
        return this;
    }
}