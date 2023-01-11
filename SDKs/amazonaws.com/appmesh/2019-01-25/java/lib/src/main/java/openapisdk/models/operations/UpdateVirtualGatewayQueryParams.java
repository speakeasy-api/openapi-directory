package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVirtualGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public UpdateVirtualGatewayQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}