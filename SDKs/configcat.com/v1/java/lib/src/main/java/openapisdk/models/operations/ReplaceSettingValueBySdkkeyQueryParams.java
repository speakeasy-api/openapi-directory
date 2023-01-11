package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValueBySdkkeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public ReplaceSettingValueBySdkkeyQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
}