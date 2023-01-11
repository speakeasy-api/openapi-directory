package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListWebhooksPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}