package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCoreDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public DeleteCoreDevicePathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}