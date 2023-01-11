package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePortfolioSharesRequest {
    public DescribePortfolioSharesQueryParams queryParams;
    public DescribePortfolioSharesRequest withQueryParams(DescribePortfolioSharesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribePortfolioSharesHeaders headers;
    public DescribePortfolioSharesRequest withHeaders(DescribePortfolioSharesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePortfolioSharesInput request;
    public DescribePortfolioSharesRequest withRequest(openapisdk.models.shared.DescribePortfolioSharesInput request) {
        this.request = request;
        return this;
    }
}