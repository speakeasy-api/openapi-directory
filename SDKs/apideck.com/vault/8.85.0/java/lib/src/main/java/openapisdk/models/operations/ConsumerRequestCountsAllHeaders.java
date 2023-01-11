package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsumerRequestCountsAllHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-apideck-app-id")
    public String xApideckAppId;
    public ConsumerRequestCountsAllHeaders withXApideckAppId(String xApideckAppId) {
        this.xApideckAppId = xApideckAppId;
        return this;
    }
}