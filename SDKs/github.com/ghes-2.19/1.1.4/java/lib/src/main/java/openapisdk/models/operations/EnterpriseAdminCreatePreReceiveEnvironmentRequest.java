package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreatePreReceiveEnvironmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreatePreReceiveEnvironmentRequestBody request;
    public EnterpriseAdminCreatePreReceiveEnvironmentRequest withRequest(EnterpriseAdminCreatePreReceiveEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}