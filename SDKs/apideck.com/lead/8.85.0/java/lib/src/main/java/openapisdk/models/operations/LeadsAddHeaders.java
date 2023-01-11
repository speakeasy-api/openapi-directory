package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsAddHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public LeadsAddHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public LeadsAddHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public LeadsAddHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}