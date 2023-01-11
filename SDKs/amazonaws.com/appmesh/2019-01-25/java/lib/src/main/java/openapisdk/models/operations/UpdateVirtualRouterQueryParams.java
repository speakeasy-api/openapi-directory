package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVirtualRouterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public UpdateVirtualRouterQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}