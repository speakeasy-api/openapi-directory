package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEffectiveDeploymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=coreDeviceThingName")
    public String coreDeviceThingName;
    public ListEffectiveDeploymentsPathParams withCoreDeviceThingName(String coreDeviceThingName) {
        this.coreDeviceThingName = coreDeviceThingName;
        return this;
    }
}