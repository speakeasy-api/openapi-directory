package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortfolioShareDetail
 * Information about the portfolio share.
**/
public class PortfolioShareDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accepted")
    public Boolean accepted;
    public PortfolioShareDetail withAccepted(Boolean accepted) {
        this.accepted = accepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalId")
    public String principalId;
    public PortfolioShareDetail withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareTagOptions")
    public Boolean shareTagOptions;
    public PortfolioShareDetail withShareTagOptions(Boolean shareTagOptions) {
        this.shareTagOptions = shareTagOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public DescribePortfolioShareTypeEnum type;
    public PortfolioShareDetail withType(DescribePortfolioShareTypeEnum type) {
        this.type = type;
        return this;
    }
}