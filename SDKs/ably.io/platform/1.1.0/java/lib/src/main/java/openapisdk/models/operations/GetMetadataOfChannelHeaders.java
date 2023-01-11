package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMetadataOfChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetMetadataOfChannelHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}