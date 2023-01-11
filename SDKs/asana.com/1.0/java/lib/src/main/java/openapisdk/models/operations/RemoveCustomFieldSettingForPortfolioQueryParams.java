package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveCustomFieldSettingForPortfolioQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public RemoveCustomFieldSettingForPortfolioQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}