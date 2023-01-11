package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestCustomDataIdentifierRequest {
    public TestCustomDataIdentifierHeaders headers;
    public TestCustomDataIdentifierRequest withHeaders(TestCustomDataIdentifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TestCustomDataIdentifierRequestBody request;
    public TestCustomDataIdentifierRequest withRequest(TestCustomDataIdentifierRequestBody request) {
        this.request = request;
        return this;
    }
}