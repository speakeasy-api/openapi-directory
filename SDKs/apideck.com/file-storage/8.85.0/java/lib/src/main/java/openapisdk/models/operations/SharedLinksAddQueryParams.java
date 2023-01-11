package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public SharedLinksAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}