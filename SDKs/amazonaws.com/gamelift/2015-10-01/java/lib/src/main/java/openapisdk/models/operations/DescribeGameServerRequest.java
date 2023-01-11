package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameServerRequest {
    public DescribeGameServerHeaders headers;
    public DescribeGameServerRequest withHeaders(DescribeGameServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameServerInput request;
    public DescribeGameServerRequest withRequest(openapisdk.models.shared.DescribeGameServerInput request) {
        this.request = request;
        return this;
    }
}