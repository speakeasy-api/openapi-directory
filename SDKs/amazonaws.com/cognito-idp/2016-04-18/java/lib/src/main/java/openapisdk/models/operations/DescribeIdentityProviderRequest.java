package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityProviderRequest {
    public DescribeIdentityProviderHeaders headers;
    public DescribeIdentityProviderRequest withHeaders(DescribeIdentityProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeIdentityProviderRequest request;
    public DescribeIdentityProviderRequest withRequest(openapisdk.models.shared.DescribeIdentityProviderRequest request) {
        this.request = request;
        return this;
    }
}