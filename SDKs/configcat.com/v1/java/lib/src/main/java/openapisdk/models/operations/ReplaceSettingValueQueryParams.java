package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public ReplaceSettingValueQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
}