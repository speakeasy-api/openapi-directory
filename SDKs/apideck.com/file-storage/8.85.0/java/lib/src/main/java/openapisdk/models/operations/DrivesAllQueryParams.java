package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public DrivesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.DrivesFilter filter;
    public DrivesAllQueryParams withFilter(openapisdk.models.shared.DrivesFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DrivesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DrivesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}