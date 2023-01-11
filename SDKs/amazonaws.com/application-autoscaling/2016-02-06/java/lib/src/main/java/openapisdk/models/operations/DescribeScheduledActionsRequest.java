package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScheduledActionsRequest {
    public DescribeScheduledActionsQueryParams queryParams;
    public DescribeScheduledActionsRequest withQueryParams(DescribeScheduledActionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeScheduledActionsHeaders headers;
    public DescribeScheduledActionsRequest withHeaders(DescribeScheduledActionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScheduledActionsRequest request;
    public DescribeScheduledActionsRequest withRequest(openapisdk.models.shared.DescribeScheduledActionsRequest request) {
        this.request = request;
        return this;
    }
}