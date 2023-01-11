package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterAllPushDevicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public UnregisterAllPushDevicesHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}