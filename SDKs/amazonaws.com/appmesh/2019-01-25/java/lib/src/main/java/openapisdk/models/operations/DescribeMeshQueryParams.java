package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMeshQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DescribeMeshQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}