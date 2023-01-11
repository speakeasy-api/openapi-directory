package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OpportunitiesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}