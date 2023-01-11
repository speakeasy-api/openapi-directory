package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWehooksListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetWehooksListQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetWehooksListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetWehooksListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}