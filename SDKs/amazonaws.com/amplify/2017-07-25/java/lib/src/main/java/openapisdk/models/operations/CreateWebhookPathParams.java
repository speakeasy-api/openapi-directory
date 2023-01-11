package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateWebhookPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}