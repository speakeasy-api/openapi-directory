package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public OpportunitiesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.OpportunitiesFilter filter;
    public OpportunitiesAllQueryParams withFilter(openapisdk.models.shared.OpportunitiesFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public OpportunitiesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public OpportunitiesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort")
    public openapisdk.models.shared.OpportunitiesSort sort;
    public OpportunitiesAllQueryParams withSort(openapisdk.models.shared.OpportunitiesSort sort) {
        this.sort = sort;
        return this;
    }
}