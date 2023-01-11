package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListingsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ListingsAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=external_id")
    public String externalId;
    public ListingsAllQueryParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListingsAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}