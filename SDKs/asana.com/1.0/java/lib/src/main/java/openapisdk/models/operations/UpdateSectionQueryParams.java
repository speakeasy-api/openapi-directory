package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public UpdateSectionQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public UpdateSectionQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}