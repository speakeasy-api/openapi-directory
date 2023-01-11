package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendBonusRequest {
    public SendBonusHeaders headers;
    public SendBonusRequest withHeaders(SendBonusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendBonusRequest request;
    public SendBonusRequest withRequest(openapisdk.models.shared.SendBonusRequest request) {
        this.request = request;
        return this;
    }
}