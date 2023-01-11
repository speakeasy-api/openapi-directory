package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVirtualGatewaysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public ListVirtualGatewaysPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}