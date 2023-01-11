package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPushDeviceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public PutPushDeviceDetailsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}