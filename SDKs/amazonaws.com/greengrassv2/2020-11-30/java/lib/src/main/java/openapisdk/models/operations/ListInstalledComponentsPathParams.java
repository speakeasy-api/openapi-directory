package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInstalledComponentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public ListInstalledComponentsPathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}