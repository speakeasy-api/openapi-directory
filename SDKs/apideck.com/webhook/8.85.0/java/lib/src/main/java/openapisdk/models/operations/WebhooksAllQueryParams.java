package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public WebhooksAllQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public WebhooksAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}