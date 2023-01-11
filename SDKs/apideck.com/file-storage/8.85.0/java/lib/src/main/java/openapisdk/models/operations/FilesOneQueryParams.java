package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FilesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}