package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePortfolioShareInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public UpdatePortfolioShareInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public UpdatePortfolioShareInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationNode")
    public OrganizationNode organizationNode;
    public UpdatePortfolioShareInput withOrganizationNode(OrganizationNode organizationNode) {
        this.organizationNode = organizationNode;
        return this;
    }
    @JsonProperty("PortfolioId")
    public String portfolioId;
    public UpdatePortfolioShareInput withPortfolioId(String portfolioId) {
        this.portfolioId = portfolioId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareTagOptions")
    public Boolean shareTagOptions;
    public UpdatePortfolioShareInput withShareTagOptions(Boolean shareTagOptions) {
        this.shareTagOptions = shareTagOptions;
        return this;
    }
}