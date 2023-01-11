package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DeleteGatewayRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}