package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksShortExecuteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=e")
    public String e;
    public WebhooksShortExecuteQueryParams withE(String e) {
        this.e = e;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=l_id")
    public String lId;
    public WebhooksShortExecuteQueryParams withLId(String lId) {
        this.lId = lId;
        return this;
    }
}