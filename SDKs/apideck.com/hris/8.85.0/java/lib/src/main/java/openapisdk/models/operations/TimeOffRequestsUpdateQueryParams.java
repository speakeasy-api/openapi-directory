package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public TimeOffRequestsUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}