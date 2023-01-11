package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public CompaniesAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CompaniesAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public CompaniesAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}