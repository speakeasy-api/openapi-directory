package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePortfolioRequest {
    public DescribePortfolioHeaders headers;
    public DescribePortfolioRequest withHeaders(DescribePortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePortfolioInput request;
    public DescribePortfolioRequest withRequest(openapisdk.models.shared.DescribePortfolioInput request) {
        this.request = request;
        return this;
    }
}