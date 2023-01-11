package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteEgressOnlyInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteEgressOnlyInternetGatewayActionEnum action;
    public PostDeleteEgressOnlyInternetGatewayQueryParams withAction(PostDeleteEgressOnlyInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteEgressOnlyInternetGatewayVersionEnum version;
    public PostDeleteEgressOnlyInternetGatewayQueryParams withVersion(PostDeleteEgressOnlyInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}