package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayMediaIntentHandlingRequest {
    public PlayMediaIntentHandlingHeaders headers;
    public PlayMediaIntentHandlingRequest withHeaders(PlayMediaIntentHandlingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlayMediaIntentHandlingInvocation[] request;
    public PlayMediaIntentHandlingRequest withRequest(openapisdk.models.shared.PlayMediaIntentHandlingInvocation[] request) {
        this.request = request;
        return this;
    }
}