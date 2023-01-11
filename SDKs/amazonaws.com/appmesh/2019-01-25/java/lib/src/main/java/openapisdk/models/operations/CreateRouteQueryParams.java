package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public CreateRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}