package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FoldersDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}