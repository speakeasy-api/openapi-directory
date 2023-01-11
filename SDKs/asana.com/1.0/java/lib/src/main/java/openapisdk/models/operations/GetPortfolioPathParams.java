package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_gid")
    public String portfolioGid;
    public GetPortfolioPathParams withPortfolioGid(String portfolioGid) {
        this.portfolioGid = portfolioGid;
        return this;
    }
}