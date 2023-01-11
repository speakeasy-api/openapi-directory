package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesAddQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MessagesAddQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}