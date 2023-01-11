package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectorEntityRequest {
    public DescribeConnectorEntityHeaders headers;
    public DescribeConnectorEntityRequest withHeaders(DescribeConnectorEntityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeConnectorEntityRequestBody request;
    public DescribeConnectorEntityRequest withRequest(DescribeConnectorEntityRequestBody request) {
        this.request = request;
        return this;
    }
}