package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public SharedLinksDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}