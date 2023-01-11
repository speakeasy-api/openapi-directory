package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksResolvePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksResolvePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public WebhooksResolvePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}