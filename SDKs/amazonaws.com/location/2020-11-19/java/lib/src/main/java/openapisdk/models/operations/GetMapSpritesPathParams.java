package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapSpritesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FileName")
    public String fileName;
    public GetMapSpritesPathParams withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public GetMapSpritesPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}