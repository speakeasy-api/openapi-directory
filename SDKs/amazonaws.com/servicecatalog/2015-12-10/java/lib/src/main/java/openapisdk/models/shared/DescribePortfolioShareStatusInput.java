package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribePortfolioShareStatusInput {
    @JsonProperty("PortfolioShareToken")
    public String portfolioShareToken;
    public DescribePortfolioShareStatusInput withPortfolioShareToken(String portfolioShareToken) {
        this.portfolioShareToken = portfolioShareToken;
        return this;
    }
}