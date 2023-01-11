package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_membership_gid")
    public String portfolioMembershipGid;
    public GetPortfolioMembershipPathParams withPortfolioMembershipGid(String portfolioMembershipGid) {
        this.portfolioMembershipGid = portfolioMembershipGid;
        return this;
    }
}