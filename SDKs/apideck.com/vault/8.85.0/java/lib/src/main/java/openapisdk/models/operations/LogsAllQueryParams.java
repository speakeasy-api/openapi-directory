package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LogsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public LogsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.LogsFilter filter;
    public LogsAllQueryParams withFilter(openapisdk.models.shared.LogsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public LogsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}