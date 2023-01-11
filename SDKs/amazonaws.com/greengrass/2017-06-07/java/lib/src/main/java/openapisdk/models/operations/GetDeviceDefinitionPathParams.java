package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionId")
    public String deviceDefinitionId;
    public GetDeviceDefinitionPathParams withDeviceDefinitionId(String deviceDefinitionId) {
        this.deviceDefinitionId = deviceDefinitionId;
        return this;
    }
}