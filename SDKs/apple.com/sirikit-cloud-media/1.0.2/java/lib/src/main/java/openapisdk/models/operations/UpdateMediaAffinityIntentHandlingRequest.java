package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMediaAffinityIntentHandlingRequest {
    public UpdateMediaAffinityIntentHandlingHeaders headers;
    public UpdateMediaAffinityIntentHandlingRequest withHeaders(UpdateMediaAffinityIntentHandlingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMediaAffinityIntentHandlingInvocation[] request;
    public UpdateMediaAffinityIntentHandlingRequest withRequest(openapisdk.models.shared.UpdateMediaAffinityIntentHandlingInvocation[] request) {
        this.request = request;
        return this;
    }
}