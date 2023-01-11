package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterWebhookWithThirdPartyRequest {
    public RegisterWebhookWithThirdPartyHeaders headers;
    public RegisterWebhookWithThirdPartyRequest withHeaders(RegisterWebhookWithThirdPartyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterWebhookWithThirdPartyInput request;
    public RegisterWebhookWithThirdPartyRequest withRequest(openapisdk.models.shared.RegisterWebhookWithThirdPartyInput request) {
        this.request = request;
        return this;
    }
}