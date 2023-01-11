package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeviceDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionId")
    public String deviceDefinitionId;
    public DeleteDeviceDefinitionPathParams withDeviceDefinitionId(String deviceDefinitionId) {
        this.deviceDefinitionId = deviceDefinitionId;
        return this;
    }
}