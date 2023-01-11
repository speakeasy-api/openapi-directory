package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public NotesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}