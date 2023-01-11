package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FoldersUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}