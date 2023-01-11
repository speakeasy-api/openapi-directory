package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public NotesDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}