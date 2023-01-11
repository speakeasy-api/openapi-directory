package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksOneHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public WebhooksOneHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
}