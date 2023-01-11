package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public SharedLinksOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}