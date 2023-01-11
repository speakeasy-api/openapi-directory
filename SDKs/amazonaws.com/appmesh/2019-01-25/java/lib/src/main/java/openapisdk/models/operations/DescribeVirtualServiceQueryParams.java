package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVirtualServiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DescribeVirtualServiceQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}