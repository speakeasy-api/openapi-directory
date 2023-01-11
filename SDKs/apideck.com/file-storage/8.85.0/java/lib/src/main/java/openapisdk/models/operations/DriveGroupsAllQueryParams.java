package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveGroupsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public DriveGroupsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.DriveGroupsFilter filter;
    public DriveGroupsAllQueryParams withFilter(openapisdk.models.shared.DriveGroupsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public DriveGroupsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public DriveGroupsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}