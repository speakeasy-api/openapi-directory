package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MessagesOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}