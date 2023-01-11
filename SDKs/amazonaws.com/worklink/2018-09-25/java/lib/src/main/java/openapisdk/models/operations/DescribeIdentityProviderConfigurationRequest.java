package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityProviderConfigurationRequest {
    public DescribeIdentityProviderConfigurationHeaders headers;
    public DescribeIdentityProviderConfigurationRequest withHeaders(DescribeIdentityProviderConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeIdentityProviderConfigurationRequestBody request;
    public DescribeIdentityProviderConfigurationRequest withRequest(DescribeIdentityProviderConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}