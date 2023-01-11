package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksAddHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public WebhooksAddHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
}