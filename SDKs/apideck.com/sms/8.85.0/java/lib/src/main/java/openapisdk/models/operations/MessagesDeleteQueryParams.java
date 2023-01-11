package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MessagesDeleteQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}