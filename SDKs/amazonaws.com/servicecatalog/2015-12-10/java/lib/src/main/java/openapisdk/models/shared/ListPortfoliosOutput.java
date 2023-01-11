package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPortfoliosOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListPortfoliosOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioDetails")
    public PortfolioDetail[] portfolioDetails;
    public ListPortfoliosOutput withPortfolioDetails(PortfolioDetail[] portfolioDetails) {
        this.portfolioDetails = portfolioDetails;
        return this;
    }
}