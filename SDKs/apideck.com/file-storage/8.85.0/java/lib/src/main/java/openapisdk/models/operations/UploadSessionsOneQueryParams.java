package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UploadSessionsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}