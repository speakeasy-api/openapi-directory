package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPushSubscriptionsOnChannelsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetPushSubscriptionsOnChannelsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}