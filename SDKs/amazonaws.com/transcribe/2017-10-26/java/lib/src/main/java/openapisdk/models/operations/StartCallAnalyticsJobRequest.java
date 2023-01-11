package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCallAnalyticsJobRequest {
    public StartCallAnalyticsJobHeaders headers;
    public StartCallAnalyticsJobRequest withHeaders(StartCallAnalyticsJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartCallAnalyticsJobRequest request;
    public StartCallAnalyticsJobRequest withRequest(openapisdk.models.shared.StartCallAnalyticsJobRequest request) {
        this.request = request;
        return this;
    }
}