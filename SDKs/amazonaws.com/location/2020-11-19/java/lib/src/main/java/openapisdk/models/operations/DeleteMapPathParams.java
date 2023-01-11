package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMapPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public DeleteMapPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}