package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksShortExecutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksShortExecutePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public WebhooksShortExecutePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}