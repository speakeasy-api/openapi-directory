package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMapPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public DescribeMapPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}