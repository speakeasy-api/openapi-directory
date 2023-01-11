package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingValueBySdkkeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public UpdateSettingValueBySdkkeyQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
}