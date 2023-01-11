package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClientDevicesAssociatedWithCoreDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public ListClientDevicesAssociatedWithCoreDevicePathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}