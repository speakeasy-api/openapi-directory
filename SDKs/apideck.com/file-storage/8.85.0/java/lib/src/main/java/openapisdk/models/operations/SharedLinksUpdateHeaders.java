package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksUpdateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public SharedLinksUpdateHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public SharedLinksUpdateHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public SharedLinksUpdateHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}