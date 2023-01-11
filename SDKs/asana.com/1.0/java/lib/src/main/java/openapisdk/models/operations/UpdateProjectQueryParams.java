package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public UpdateProjectQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public UpdateProjectQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}