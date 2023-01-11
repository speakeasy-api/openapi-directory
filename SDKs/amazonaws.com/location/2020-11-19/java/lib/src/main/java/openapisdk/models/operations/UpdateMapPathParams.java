package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMapPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public UpdateMapPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}