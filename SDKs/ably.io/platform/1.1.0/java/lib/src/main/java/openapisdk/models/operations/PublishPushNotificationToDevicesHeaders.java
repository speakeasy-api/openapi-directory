package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishPushNotificationToDevicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public PublishPushNotificationToDevicesHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}