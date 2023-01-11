package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingValueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public UpdateSettingValueQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
}