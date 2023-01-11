package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormEntriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetFormEntriesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetFormEntriesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}