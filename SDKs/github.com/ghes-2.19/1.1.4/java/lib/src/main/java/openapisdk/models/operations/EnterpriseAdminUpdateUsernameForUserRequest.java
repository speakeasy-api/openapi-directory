package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateUsernameForUserRequest {
    public EnterpriseAdminUpdateUsernameForUserPathParams pathParams;
    public EnterpriseAdminUpdateUsernameForUserRequest withPathParams(EnterpriseAdminUpdateUsernameForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateUsernameForUserRequestBody request;
    public EnterpriseAdminUpdateUsernameForUserRequest withRequest(EnterpriseAdminUpdateUsernameForUserRequestBody request) {
        this.request = request;
        return this;
    }
}