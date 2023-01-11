package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateClientDeviceWithCoreDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public BatchAssociateClientDeviceWithCoreDevicePathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}