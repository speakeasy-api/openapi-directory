package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveCustomFieldSettingForProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public RemoveCustomFieldSettingForProjectQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}