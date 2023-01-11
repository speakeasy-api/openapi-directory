package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceHistoryOfChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetPresenceHistoryOfChannelHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}