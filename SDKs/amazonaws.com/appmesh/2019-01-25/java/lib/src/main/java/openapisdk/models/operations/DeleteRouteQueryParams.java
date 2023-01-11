package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DeleteRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}