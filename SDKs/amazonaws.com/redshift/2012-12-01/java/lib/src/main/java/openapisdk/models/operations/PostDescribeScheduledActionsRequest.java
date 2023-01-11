package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScheduledActionsRequest {
    public PostDescribeScheduledActionsQueryParams queryParams;
    public PostDescribeScheduledActionsRequest withQueryParams(PostDescribeScheduledActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeScheduledActionsHeaders headers;
    public PostDescribeScheduledActionsRequest withHeaders(PostDescribeScheduledActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeScheduledActionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}