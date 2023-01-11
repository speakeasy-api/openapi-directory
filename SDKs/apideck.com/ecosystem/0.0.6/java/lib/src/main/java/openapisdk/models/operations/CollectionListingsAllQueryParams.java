package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionListingsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public CollectionListingsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CollectionListingsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}