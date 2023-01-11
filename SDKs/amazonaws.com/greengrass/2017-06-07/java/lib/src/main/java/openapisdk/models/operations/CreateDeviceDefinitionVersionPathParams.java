package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeviceDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionId")
    public String deviceDefinitionId;
    public CreateDeviceDefinitionVersionPathParams withDeviceDefinitionId(String deviceDefinitionId) {
        this.deviceDefinitionId = deviceDefinitionId;
        return this;
    }
}