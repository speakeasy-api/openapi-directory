package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestConnectionRequest {
    public TestConnectionHeaders headers;
    public TestConnectionRequest withHeaders(TestConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestConnectionMessage request;
    public TestConnectionRequest withRequest(openapisdk.models.shared.TestConnectionMessage request) {
        this.request = request;
        return this;
    }
}