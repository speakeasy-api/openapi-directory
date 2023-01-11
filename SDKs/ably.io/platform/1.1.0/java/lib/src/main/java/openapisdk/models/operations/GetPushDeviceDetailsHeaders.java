package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPushDeviceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public GetPushDeviceDetailsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}