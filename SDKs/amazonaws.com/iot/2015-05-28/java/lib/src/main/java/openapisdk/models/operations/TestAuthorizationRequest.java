package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestAuthorizationRequest {
    public TestAuthorizationQueryParams queryParams;
    public TestAuthorizationRequest withQueryParams(TestAuthorizationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TestAuthorizationHeaders headers;
    public TestAuthorizationRequest withHeaders(TestAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TestAuthorizationRequestBody request;
    public TestAuthorizationRequest withRequest(TestAuthorizationRequestBody request) {
        this.request = request;
        return this;
    }
}