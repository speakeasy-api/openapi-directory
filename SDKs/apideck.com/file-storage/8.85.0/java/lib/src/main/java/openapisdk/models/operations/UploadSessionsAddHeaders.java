package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsAddHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public UploadSessionsAddHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public UploadSessionsAddHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public UploadSessionsAddHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}