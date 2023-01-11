package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FoldersOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}