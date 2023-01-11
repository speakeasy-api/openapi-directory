package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesSearchHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public FilesSearchHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public FilesSearchHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public FilesSearchHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}