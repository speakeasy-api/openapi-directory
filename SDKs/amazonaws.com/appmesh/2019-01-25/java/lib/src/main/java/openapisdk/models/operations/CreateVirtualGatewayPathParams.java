package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualGatewayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=meshName")
    public String meshName;
    public CreateVirtualGatewayPathParams withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
}