package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMessagesToChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public PublishMessagesToChannelHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}