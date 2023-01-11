package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FoldersAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}