package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestMetricFilterRequest {
    public TestMetricFilterHeaders headers;
    public TestMetricFilterRequest withHeaders(TestMetricFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestMetricFilterRequest request;
    public TestMetricFilterRequest withRequest(openapisdk.models.shared.TestMetricFilterRequest request) {
        this.request = request;
        return this;
    }
}