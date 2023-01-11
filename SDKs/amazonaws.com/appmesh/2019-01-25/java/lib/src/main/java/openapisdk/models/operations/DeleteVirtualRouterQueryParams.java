package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVirtualRouterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DeleteVirtualRouterQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}