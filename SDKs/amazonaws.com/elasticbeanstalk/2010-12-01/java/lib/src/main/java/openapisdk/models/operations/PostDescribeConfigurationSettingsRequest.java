package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationSettingsRequest {
    public PostDescribeConfigurationSettingsQueryParams queryParams;
    public PostDescribeConfigurationSettingsRequest withQueryParams(PostDescribeConfigurationSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeConfigurationSettingsHeaders headers;
    public PostDescribeConfigurationSettingsRequest withHeaders(PostDescribeConfigurationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeConfigurationSettingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}