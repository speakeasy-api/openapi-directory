package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicantsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ApplicantsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.JobsFilter filter;
    public ApplicantsAllQueryParams withFilter(openapisdk.models.shared.JobsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ApplicantsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ApplicantsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}