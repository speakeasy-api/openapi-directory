package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceOfChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetPresenceOfChannelHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}