package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionsCreateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public SessionsCreateHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public SessionsCreateHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
}