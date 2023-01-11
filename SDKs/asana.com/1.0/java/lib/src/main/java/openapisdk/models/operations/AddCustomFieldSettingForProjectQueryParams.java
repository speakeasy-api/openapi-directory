package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomFieldSettingForProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public AddCustomFieldSettingForProjectQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}