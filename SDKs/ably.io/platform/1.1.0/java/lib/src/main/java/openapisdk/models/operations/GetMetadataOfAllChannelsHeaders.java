package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMetadataOfAllChannelsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetMetadataOfAllChannelsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}