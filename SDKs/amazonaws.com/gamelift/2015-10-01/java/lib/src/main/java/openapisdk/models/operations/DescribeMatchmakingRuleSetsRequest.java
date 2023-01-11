package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMatchmakingRuleSetsRequest {
    public DescribeMatchmakingRuleSetsQueryParams queryParams;
    public DescribeMatchmakingRuleSetsRequest withQueryParams(DescribeMatchmakingRuleSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMatchmakingRuleSetsHeaders headers;
    public DescribeMatchmakingRuleSetsRequest withHeaders(DescribeMatchmakingRuleSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMatchmakingRuleSetsInput request;
    public DescribeMatchmakingRuleSetsRequest withRequest(openapisdk.models.shared.DescribeMatchmakingRuleSetsInput request) {
        this.request = request;
        return this;
    }
}