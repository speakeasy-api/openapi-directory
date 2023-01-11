package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomFieldSettingsForPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_gid")
    public String portfolioGid;
    public GetCustomFieldSettingsForPortfolioPathParams withPortfolioGid(String portfolioGid) {
        this.portfolioGid = portfolioGid;
        return this;
    }
}