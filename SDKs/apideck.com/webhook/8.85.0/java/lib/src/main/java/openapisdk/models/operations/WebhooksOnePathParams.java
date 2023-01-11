package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}