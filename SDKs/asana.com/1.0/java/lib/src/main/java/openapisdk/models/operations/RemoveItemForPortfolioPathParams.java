package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveItemForPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_gid")
    public String portfolioGid;
    public RemoveItemForPortfolioPathParams withPortfolioGid(String portfolioGid) {
        this.portfolioGid = portfolioGid;
        return this;
    }
}