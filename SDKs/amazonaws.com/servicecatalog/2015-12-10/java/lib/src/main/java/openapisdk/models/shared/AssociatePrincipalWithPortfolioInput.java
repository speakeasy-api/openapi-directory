package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociatePrincipalWithPortfolioInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public AssociatePrincipalWithPortfolioInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public AssociatePrincipalWithPortfolioInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonProperty("PrincipalARN")
    public String principalARN;
    public AssociatePrincipalWithPortfolioInput withPrincipalArn(String principalARN) {
        this.principalARN = principalARN;
        return this;
    }
    @JsonProperty("PrincipalType")
    public PrincipalTypeEnum principalType;
    public AssociatePrincipalWithPortfolioInput withPrincipalType(PrincipalTypeEnum principalType) {
        this.principalType = principalType;
        return this;
    }
}