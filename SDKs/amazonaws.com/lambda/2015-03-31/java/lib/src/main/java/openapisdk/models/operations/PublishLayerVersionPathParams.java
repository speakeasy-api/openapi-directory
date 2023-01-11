package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishLayerVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public PublishLayerVersionPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
}