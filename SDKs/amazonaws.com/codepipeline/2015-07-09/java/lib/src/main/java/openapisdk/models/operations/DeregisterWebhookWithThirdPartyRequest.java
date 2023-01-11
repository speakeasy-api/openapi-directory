package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterWebhookWithThirdPartyRequest {
    public DeregisterWebhookWithThirdPartyHeaders headers;
    public DeregisterWebhookWithThirdPartyRequest withHeaders(DeregisterWebhookWithThirdPartyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterWebhookWithThirdPartyInput request;
    public DeregisterWebhookWithThirdPartyRequest withRequest(openapisdk.models.shared.DeregisterWebhookWithThirdPartyInput request) {
        this.request = request;
        return this;
    }
}