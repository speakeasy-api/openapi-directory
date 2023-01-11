package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PipelinesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PipelinesAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}