package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public JobsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}