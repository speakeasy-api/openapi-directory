package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRobotRequest {
    public DescribeRobotHeaders headers;
    public DescribeRobotRequest withHeaders(DescribeRobotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeRobotRequestBody request;
    public DescribeRobotRequest withRequest(DescribeRobotRequestBody request) {
        this.request = request;
        return this;
    }
}