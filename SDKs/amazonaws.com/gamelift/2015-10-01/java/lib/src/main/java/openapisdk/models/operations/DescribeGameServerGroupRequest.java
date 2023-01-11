package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameServerGroupRequest {
    public DescribeGameServerGroupHeaders headers;
    public DescribeGameServerGroupRequest withHeaders(DescribeGameServerGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameServerGroupInput request;
    public DescribeGameServerGroupRequest withRequest(openapisdk.models.shared.DescribeGameServerGroupInput request) {
        this.request = request;
        return this;
    }
}