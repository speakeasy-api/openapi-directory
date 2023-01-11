package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePortfolioShareOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioShareToken")
    public String portfolioShareToken;
    public CreatePortfolioShareOutput withPortfolioShareToken(String portfolioShareToken) {
        this.portfolioShareToken = portfolioShareToken;
        return this;
    }
}