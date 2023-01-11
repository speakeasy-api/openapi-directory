package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public MessagesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public MessagesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public MessagesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}