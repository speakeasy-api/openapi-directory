package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadSessionsFinishHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=digest")
    public String digest;
    public UploadSessionsFinishHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public UploadSessionsFinishHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-consumer-id")
    public String xApideckConsumerId;
    public UploadSessionsFinishHeaders withXApideckConsumerId(String xApideckConsumerId) {
        this.xApideckConsumerId = xApideckConsumerId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-service-id")
    public String xApideckServiceId;
    public UploadSessionsFinishHeaders withXApideckServiceId(String xApideckServiceId) {
        this.xApideckServiceId = xApideckServiceId;
        return this;
    }
}