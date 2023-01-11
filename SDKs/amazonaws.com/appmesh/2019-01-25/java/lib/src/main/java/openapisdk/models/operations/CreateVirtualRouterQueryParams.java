package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVirtualRouterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public CreateVirtualRouterQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}