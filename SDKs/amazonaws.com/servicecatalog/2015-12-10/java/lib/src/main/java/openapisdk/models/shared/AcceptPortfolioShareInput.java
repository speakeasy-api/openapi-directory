package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptPortfolioShareInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public AcceptPortfolioShareInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public AcceptPortfolioShareInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortfolioShareType")
    public PortfolioShareTypeEnum portfolioShareType;
    public AcceptPortfolioShareInput withPortfolioShareType(PortfolioShareTypeEnum portfolioShareType) {
        this.portfolioShareType = portfolioShareType;
        return this;
    }
}