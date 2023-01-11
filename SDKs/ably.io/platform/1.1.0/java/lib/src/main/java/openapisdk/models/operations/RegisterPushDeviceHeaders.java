package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterPushDeviceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public RegisterPushDeviceHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}