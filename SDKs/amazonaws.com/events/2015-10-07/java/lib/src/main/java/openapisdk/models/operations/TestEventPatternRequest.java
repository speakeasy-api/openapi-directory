package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestEventPatternRequest {
    public TestEventPatternHeaders headers;
    public TestEventPatternRequest withHeaders(TestEventPatternHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestEventPatternRequest request;
    public TestEventPatternRequest withRequest(openapisdk.models.shared.TestEventPatternRequest request) {
        this.request = request;
        return this;
    }
}