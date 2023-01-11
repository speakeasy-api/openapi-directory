package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UploadSessionsDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}