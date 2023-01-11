package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMediaIntentHandlingRequest {
    public AddMediaIntentHandlingHeaders headers;
    public AddMediaIntentHandlingRequest withHeaders(AddMediaIntentHandlingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddMediaIntentHandlingInvocation[] request;
    public AddMediaIntentHandlingRequest withRequest(openapisdk.models.shared.AddMediaIntentHandlingInvocation[] request) {
        this.request = request;
        return this;
    }
}