package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public FilesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.FilesFilter filter;
    public FilesAllQueryParams withFilter(openapisdk.models.shared.FilesFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public FilesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public FilesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort")
    public openapisdk.models.shared.FilesSort sort;
    public FilesAllQueryParams withSort(openapisdk.models.shared.FilesSort sort) {
        this.sort = sort;
        return this;
    }
}