package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductListingsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ProductListingsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ProductListingsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}