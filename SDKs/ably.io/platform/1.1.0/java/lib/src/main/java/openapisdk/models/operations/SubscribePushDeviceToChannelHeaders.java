package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribePushDeviceToChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public SubscribePushDeviceToChannelHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}