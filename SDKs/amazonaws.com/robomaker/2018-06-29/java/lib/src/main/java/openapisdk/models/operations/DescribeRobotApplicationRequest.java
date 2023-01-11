package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRobotApplicationRequest {
    public DescribeRobotApplicationHeaders headers;
    public DescribeRobotApplicationRequest withHeaders(DescribeRobotApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeRobotApplicationRequestBody request;
    public DescribeRobotApplicationRequest withRequest(DescribeRobotApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}