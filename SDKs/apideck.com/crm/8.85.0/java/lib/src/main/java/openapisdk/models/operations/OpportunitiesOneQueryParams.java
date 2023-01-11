package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OpportunitiesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}