package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointSettingsRequest {
    public DescribeEndpointSettingsQueryParams queryParams;
    public DescribeEndpointSettingsRequest withQueryParams(DescribeEndpointSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEndpointSettingsHeaders headers;
    public DescribeEndpointSettingsRequest withHeaders(DescribeEndpointSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEndpointSettingsMessage request;
    public DescribeEndpointSettingsRequest withRequest(openapisdk.models.shared.DescribeEndpointSettingsMessage request) {
        this.request = request;
        return this;
    }
}