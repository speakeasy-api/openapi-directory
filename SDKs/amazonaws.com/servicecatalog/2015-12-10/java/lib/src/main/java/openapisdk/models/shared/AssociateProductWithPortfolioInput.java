package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateProductWithPortfolioInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public AssociateProductWithPortfolioInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public AssociateProductWithPortfolioInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonProperty("ProductId")
    public String productId;
    public AssociateProductWithPortfolioInput withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePortfolioId")
    public String sourcePortfolioId;
    public AssociateProductWithPortfolioInput withSourcePortfolioId(String sourcePortfolioId) {
        this.sourcePortfolioId = sourcePortfolioId;
        return this;
    }
}