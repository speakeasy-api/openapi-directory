package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGatewayRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=meshOwner")
    public String meshOwner;
    public DescribeGatewayRouteQueryParams withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
}