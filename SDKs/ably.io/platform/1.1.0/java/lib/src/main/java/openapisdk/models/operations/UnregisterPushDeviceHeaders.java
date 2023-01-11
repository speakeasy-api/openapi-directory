package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterPushDeviceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public UnregisterPushDeviceHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}