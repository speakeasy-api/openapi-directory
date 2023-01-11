package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersForPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_gid")
    public String portfolioGid;
    public AddMembersForPortfolioPathParams withPortfolioGid(String portfolioGid) {
        this.portfolioGid = portfolioGid;
        return this;
    }
}