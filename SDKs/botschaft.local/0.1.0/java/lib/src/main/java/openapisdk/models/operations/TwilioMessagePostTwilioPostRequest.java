package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwilioMessagePostTwilioPostRequest {
    public TwilioMessagePostTwilioPostHeaders headers;
    public TwilioMessagePostTwilioPostRequest withHeaders(TwilioMessagePostTwilioPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TwilioMessageRequest request;
    public TwilioMessagePostTwilioPostRequest withRequest(openapisdk.models.shared.TwilioMessageRequest request) {
        this.request = request;
        return this;
    }
}