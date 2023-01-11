package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksResolveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=e")
    public String e;
    public WebhooksResolveQueryParams withE(String e) {
        this.e = e;
        return this;
    }
}