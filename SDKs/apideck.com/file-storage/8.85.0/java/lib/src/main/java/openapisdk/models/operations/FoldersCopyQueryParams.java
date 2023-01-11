package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FoldersCopyQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}