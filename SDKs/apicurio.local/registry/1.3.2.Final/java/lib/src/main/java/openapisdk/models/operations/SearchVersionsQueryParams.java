package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SearchVersionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SearchVersionsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}