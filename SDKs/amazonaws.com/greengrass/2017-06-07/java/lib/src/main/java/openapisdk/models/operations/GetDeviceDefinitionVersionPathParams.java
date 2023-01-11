package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionId")
    public String deviceDefinitionId;
    public GetDeviceDefinitionVersionPathParams withDeviceDefinitionId(String deviceDefinitionId) {
        this.deviceDefinitionId = deviceDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DeviceDefinitionVersionId")
    public String deviceDefinitionVersionId;
    public GetDeviceDefinitionVersionPathParams withDeviceDefinitionVersionId(String deviceDefinitionVersionId) {
        this.deviceDefinitionVersionId = deviceDefinitionVersionId;
        return this;
    }
}