package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminAddAuthorizedSshKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminAddAuthorizedSshKeyRequestBody request;
    public EnterpriseAdminAddAuthorizedSshKeyRequest withRequest(EnterpriseAdminAddAuthorizedSshKeyRequestBody request) {
        this.request = request;
        return this;
    }
}