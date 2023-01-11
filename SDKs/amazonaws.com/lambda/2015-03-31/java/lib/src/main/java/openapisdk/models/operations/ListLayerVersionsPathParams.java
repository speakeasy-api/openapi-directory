package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLayerVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LayerName")
    public String layerName;
    public ListLayerVersionsPathParams withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
}