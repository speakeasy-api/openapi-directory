package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestIdentityProviderRequest {
    public TestIdentityProviderHeaders headers;
    public TestIdentityProviderRequest withHeaders(TestIdentityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIdentityProviderRequest request;
    public TestIdentityProviderRequest withRequest(openapisdk.models.shared.TestIdentityProviderRequest request) {
        this.request = request;
        return this;
    }
}