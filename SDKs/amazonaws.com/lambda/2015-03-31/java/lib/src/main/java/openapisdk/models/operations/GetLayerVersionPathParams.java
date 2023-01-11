package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLayerVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public GetLayerVersionPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=VersionNumber")
    public Long versionNumber;
    public GetLayerVersionPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}