package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public UpdateRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}