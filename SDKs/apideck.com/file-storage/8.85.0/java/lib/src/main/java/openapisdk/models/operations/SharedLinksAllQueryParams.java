package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public SharedLinksAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SharedLinksAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public SharedLinksAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}