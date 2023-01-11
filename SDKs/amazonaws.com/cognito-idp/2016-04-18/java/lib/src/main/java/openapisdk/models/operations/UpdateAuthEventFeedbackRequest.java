package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAuthEventFeedbackRequest {
    public UpdateAuthEventFeedbackHeaders headers;
    public UpdateAuthEventFeedbackRequest withHeaders(UpdateAuthEventFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAuthEventFeedbackRequest request;
    public UpdateAuthEventFeedbackRequest withRequest(openapisdk.models.shared.UpdateAuthEventFeedbackRequest request) {
        this.request = request;
        return this;
    }
}