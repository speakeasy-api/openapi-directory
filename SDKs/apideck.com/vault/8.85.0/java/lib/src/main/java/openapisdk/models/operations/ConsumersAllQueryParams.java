package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsumersAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public ConsumersAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ConsumersAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}