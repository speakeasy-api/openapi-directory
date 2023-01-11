package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCallAnalyticsJobRequest {
    public DeleteCallAnalyticsJobHeaders headers;
    public DeleteCallAnalyticsJobRequest withHeaders(DeleteCallAnalyticsJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCallAnalyticsJobRequest request;
    public DeleteCallAnalyticsJobRequest withRequest(openapisdk.models.shared.DeleteCallAnalyticsJobRequest request) {
        this.request = request;
        return this;
    }
}