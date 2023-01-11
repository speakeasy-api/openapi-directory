package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public SharedLinksUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}