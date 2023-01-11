package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksExecutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public WebhooksExecutePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public WebhooksExecutePathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}