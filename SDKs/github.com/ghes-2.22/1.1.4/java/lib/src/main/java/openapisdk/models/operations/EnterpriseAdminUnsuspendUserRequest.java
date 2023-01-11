package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUnsuspendUserRequest {
    public EnterpriseAdminUnsuspendUserPathParams pathParams;
    public EnterpriseAdminUnsuspendUserRequest withPathParams(EnterpriseAdminUnsuspendUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUnsuspendUserRequestBody request;
    public EnterpriseAdminUnsuspendUserRequest withRequest(EnterpriseAdminUnsuspendUserRequestBody request) {
        this.request = request;
        return this;
    }
}