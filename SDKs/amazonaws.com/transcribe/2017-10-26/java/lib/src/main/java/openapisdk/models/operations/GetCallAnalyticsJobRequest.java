package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallAnalyticsJobRequest {
    public GetCallAnalyticsJobHeaders headers;
    public GetCallAnalyticsJobRequest withHeaders(GetCallAnalyticsJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCallAnalyticsJobRequest request;
    public GetCallAnalyticsJobRequest withRequest(openapisdk.models.shared.GetCallAnalyticsJobRequest request) {
        this.request = request;
        return this;
    }
}