package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public LeadsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.LeadsFilter filter;
    public LeadsAllQueryParams withFilter(openapisdk.models.shared.LeadsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public LeadsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public LeadsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=sort")
    public openapisdk.models.shared.LeadsSort sort;
    public LeadsAllQueryParams withSort(openapisdk.models.shared.LeadsSort sort) {
        this.sort = sort;
        return this;
    }
}