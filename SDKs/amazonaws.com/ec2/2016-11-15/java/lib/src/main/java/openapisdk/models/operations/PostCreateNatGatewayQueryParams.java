package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNatGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNatGatewayActionEnum action;
    public PostCreateNatGatewayQueryParams withAction(PostCreateNatGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNatGatewayVersionEnum version;
    public PostCreateNatGatewayQueryParams withVersion(PostCreateNatGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}