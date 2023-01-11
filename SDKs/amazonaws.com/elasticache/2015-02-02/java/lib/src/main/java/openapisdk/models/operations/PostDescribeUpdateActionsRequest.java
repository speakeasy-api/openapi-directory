package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeUpdateActionsRequest {
    public PostDescribeUpdateActionsQueryParams queryParams;
    public PostDescribeUpdateActionsRequest withQueryParams(PostDescribeUpdateActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeUpdateActionsHeaders headers;
    public PostDescribeUpdateActionsRequest withHeaders(PostDescribeUpdateActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeUpdateActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}