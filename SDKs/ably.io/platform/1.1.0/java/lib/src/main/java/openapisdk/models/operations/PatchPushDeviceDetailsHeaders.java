package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPushDeviceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public PatchPushDeviceDetailsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}