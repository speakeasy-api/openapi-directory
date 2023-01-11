package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClientAuthenticationSettingsRequest {
    public DescribeClientAuthenticationSettingsHeaders headers;
    public DescribeClientAuthenticationSettingsRequest withHeaders(DescribeClientAuthenticationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeClientAuthenticationSettingsRequest request;
    public DescribeClientAuthenticationSettingsRequest withRequest(openapisdk.models.shared.DescribeClientAuthenticationSettingsRequest request) {
        this.request = request;
        return this;
    }
}