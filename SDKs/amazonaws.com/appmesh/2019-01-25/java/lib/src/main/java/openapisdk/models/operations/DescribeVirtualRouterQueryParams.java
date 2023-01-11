package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVirtualRouterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DescribeVirtualRouterQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}