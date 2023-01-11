package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public TimeOffRequestsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}