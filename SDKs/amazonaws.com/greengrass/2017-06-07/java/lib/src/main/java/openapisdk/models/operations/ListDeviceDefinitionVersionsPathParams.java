package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeviceDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionId")
    public String deviceDefinitionId;
    public ListDeviceDefinitionVersionsPathParams withDeviceDefinitionId(String deviceDefinitionId) {
        this.deviceDefinitionId = deviceDefinitionId;
        return this;
    }
}