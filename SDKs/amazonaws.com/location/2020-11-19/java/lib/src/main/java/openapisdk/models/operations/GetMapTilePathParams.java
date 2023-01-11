package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapTilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public GetMapTilePathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=X")
    public String x;
    public GetMapTilePathParams withX(String x) {
        this.x = x;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Y")
    public String y;
    public GetMapTilePathParams withY(String y) {
        this.y = y;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Z")
    public String z;
    public GetMapTilePathParams withZ(String z) {
        this.z = z;
        return this;
    }
}