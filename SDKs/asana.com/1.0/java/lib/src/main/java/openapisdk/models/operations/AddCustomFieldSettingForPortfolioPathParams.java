package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomFieldSettingForPortfolioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portfolio_gid")
    public String portfolioGid;
    public AddCustomFieldSettingForPortfolioPathParams withPortfolioGid(String portfolioGid) {
        this.portfolioGid = portfolioGid;
        return this;
    }
}