package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribePortfolioSharesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public DescribePortfolioSharesOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioShareDetails")
    public PortfolioShareDetail[] portfolioShareDetails;
    public DescribePortfolioSharesOutput withPortfolioShareDetails(PortfolioShareDetail[] portfolioShareDetails) {
        this.portfolioShareDetails = portfolioShareDetails;
        return this;
    }
}