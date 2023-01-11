package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminUpdateAuthEventFeedbackRequest {
    public AdminUpdateAuthEventFeedbackHeaders headers;
    public AdminUpdateAuthEventFeedbackRequest withHeaders(AdminUpdateAuthEventFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminUpdateAuthEventFeedbackRequest request;
    public AdminUpdateAuthEventFeedbackRequest withRequest(openapisdk.models.shared.AdminUpdateAuthEventFeedbackRequest request) {
        this.request = request;
        return this;
    }
}