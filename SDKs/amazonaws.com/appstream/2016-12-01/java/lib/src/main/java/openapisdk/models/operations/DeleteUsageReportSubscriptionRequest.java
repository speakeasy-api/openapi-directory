package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUsageReportSubscriptionRequest {
    public DeleteUsageReportSubscriptionHeaders headers;
    public DeleteUsageReportSubscriptionRequest withHeaders(DeleteUsageReportSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteUsageReportSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}