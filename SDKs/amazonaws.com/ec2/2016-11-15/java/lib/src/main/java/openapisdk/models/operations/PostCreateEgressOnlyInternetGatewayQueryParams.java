package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateEgressOnlyInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateEgressOnlyInternetGatewayActionEnum action;
    public PostCreateEgressOnlyInternetGatewayQueryParams withAction(PostCreateEgressOnlyInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateEgressOnlyInternetGatewayVersionEnum version;
    public PostCreateEgressOnlyInternetGatewayQueryParams withVersion(PostCreateEgressOnlyInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}