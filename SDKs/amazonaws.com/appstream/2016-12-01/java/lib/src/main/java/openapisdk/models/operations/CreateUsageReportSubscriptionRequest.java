package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsageReportSubscriptionRequest {
    public CreateUsageReportSubscriptionHeaders headers;
    public CreateUsageReportSubscriptionRequest withHeaders(CreateUsageReportSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateUsageReportSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}