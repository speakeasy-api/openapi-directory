package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushDeviceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public UpdatePushDeviceDetailsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}