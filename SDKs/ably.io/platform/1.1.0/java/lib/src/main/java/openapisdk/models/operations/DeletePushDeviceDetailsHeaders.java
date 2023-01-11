package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePushDeviceDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;
    public DeletePushDeviceDetailsHeaders withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
}