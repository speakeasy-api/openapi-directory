package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMatchmakingConfigurationsRequest {
    public DescribeMatchmakingConfigurationsQueryParams queryParams;
    public DescribeMatchmakingConfigurationsRequest withQueryParams(DescribeMatchmakingConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMatchmakingConfigurationsHeaders headers;
    public DescribeMatchmakingConfigurationsRequest withHeaders(DescribeMatchmakingConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMatchmakingConfigurationsInput request;
    public DescribeMatchmakingConfigurationsRequest withRequest(openapisdk.models.shared.DescribeMatchmakingConfigurationsInput request) {
        this.request = request;
        return this;
    }
}