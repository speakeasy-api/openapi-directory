package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendReferralEmailRequest {
    public SendReferralEmailHeaders headers;
    public SendReferralEmailRequest withHeaders(SendReferralEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendReferralEmailSendReferralEmailRequestBody request;
    public SendReferralEmailRequest withRequest(SendReferralEmailSendReferralEmailRequestBody request) {
        this.request = request;
        return this;
    }
}