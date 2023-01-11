package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFlowLogsRequest {
    public PostDescribeFlowLogsQueryParams queryParams;
    public PostDescribeFlowLogsRequest withQueryParams(PostDescribeFlowLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeFlowLogsHeaders headers;
    public PostDescribeFlowLogsRequest withHeaders(PostDescribeFlowLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeFlowLogsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}