package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public CreateVirtualGatewayQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}