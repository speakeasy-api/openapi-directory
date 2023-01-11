package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapStyleDescriptorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public GetMapStyleDescriptorPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}