package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVirtualServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public UpdateVirtualServiceQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}