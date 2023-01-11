package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreateUserRequestBody request;
    public EnterpriseAdminCreateUserRequest withRequest(EnterpriseAdminCreateUserRequestBody request) {
        this.request = request;
        return this;
    }
}