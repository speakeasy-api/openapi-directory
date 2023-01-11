package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePortfolioShareStatusRequest {
    public DescribePortfolioShareStatusHeaders headers;
    public DescribePortfolioShareStatusRequest withHeaders(DescribePortfolioShareStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePortfolioShareStatusInput request;
    public DescribePortfolioShareStatusRequest withRequest(openapisdk.models.shared.DescribePortfolioShareStatusInput request) {
        this.request = request;
        return this;
    }
}