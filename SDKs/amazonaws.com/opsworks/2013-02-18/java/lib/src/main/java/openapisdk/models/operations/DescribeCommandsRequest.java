package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCommandsRequest {
    public DescribeCommandsHeaders headers;
    public DescribeCommandsRequest withHeaders(DescribeCommandsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCommandsRequest request;
    public DescribeCommandsRequest withRequest(openapisdk.models.shared.DescribeCommandsRequest request) {
        this.request = request;
        return this;
    }
}