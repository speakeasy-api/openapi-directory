package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeviceResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=managedDeviceId")
    public String managedDeviceId;
    public ListDeviceResourcesPathParams withManagedDeviceId(String managedDeviceId) {
        this.managedDeviceId = managedDeviceId;
        return this;
    }
}