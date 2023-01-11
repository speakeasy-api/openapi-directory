package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePortfolioShareOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioShareToken")
    public String portfolioShareToken;
    public UpdatePortfolioShareOutput withPortfolioShareToken(String portfolioShareToken) {
        this.portfolioShareToken = portfolioShareToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ShareStatusEnum status;
    public UpdatePortfolioShareOutput withStatus(ShareStatusEnum status) {
        this.status = status;
        return this;
    }
}