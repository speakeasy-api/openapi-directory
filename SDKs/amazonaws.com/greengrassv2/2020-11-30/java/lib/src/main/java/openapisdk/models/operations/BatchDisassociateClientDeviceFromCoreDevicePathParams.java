package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateClientDeviceFromCoreDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public BatchDisassociateClientDeviceFromCoreDevicePathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}