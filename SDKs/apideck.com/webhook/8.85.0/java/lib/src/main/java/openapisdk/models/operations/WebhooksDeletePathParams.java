package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}