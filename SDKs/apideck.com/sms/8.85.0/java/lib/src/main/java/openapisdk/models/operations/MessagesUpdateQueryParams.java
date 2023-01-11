package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MessagesUpdateQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}