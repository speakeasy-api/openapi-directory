package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortfolioMembershipResponse
 * This object determines if a user is a member of a portfolio.
**/
public class PortfolioMembershipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public PortfolioMembershipResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio")
    public PortfolioCompact portfolio;
    public PortfolioMembershipResponse withPortfolio(PortfolioCompact portfolio) {
        this.portfolio = portfolio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public PortfolioMembershipResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserCompact user;
    public PortfolioMembershipResponse withUser(UserCompact user) {
        this.user = user;
        return this;
    }
}