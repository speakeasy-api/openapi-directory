package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociatePrincipalFromPortfolioInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DisassociatePrincipalFromPortfolioInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public DisassociatePrincipalFromPortfolioInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonProperty("PrincipalARN")
    public String principalARN;
    public DisassociatePrincipalFromPortfolioInput withPrincipalArn(String principalARN) {
        this.principalARN = principalARN;
        return this;
    }
}