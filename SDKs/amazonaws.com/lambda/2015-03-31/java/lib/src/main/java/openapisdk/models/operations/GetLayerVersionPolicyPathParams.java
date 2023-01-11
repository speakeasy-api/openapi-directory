package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLayerVersionPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public GetLayerVersionPolicyPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=VersionNumber")
    public Long versionNumber;
    public GetLayerVersionPolicyPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}