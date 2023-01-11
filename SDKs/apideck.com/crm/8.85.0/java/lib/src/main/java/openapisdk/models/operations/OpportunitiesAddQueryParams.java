package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OpportunitiesAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}