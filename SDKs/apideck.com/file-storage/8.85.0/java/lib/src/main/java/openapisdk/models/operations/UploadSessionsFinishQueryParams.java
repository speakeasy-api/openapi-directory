package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsFinishQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public UploadSessionsFinishQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}