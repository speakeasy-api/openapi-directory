package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLayerVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public DeleteLayerVersionPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=VersionNumber")
    public Long versionNumber;
    public DeleteLayerVersionPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}