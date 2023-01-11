package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}