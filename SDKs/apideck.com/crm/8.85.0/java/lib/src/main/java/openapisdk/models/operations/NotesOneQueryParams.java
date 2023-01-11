package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public NotesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}