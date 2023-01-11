package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetPortSettingsRequest {
    public DescribeFleetPortSettingsHeaders headers;
    public DescribeFleetPortSettingsRequest withHeaders(DescribeFleetPortSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetPortSettingsInput request;
    public DescribeFleetPortSettingsRequest withRequest(openapisdk.models.shared.DescribeFleetPortSettingsInput request) {
        this.request = request;
        return this;
    }
}