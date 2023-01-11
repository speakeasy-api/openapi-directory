package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public CollectionsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CollectionsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}