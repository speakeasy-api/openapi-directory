package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegisteredPushDevicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetRegisteredPushDevicesHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}