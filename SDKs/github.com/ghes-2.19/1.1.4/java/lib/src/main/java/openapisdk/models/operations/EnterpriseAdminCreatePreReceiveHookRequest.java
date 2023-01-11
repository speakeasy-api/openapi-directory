package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreatePreReceiveHookRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminCreatePreReceiveHookRequestBody request;
    public EnterpriseAdminCreatePreReceiveHookRequest withRequest(EnterpriseAdminCreatePreReceiveHookRequestBody request) {
        this.request = request;
        return this;
    }
}