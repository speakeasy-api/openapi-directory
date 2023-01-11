package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DescribeRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}