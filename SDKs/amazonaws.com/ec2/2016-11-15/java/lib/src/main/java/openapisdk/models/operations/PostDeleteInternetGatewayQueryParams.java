package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteInternetGatewayActionEnum action;
    public PostDeleteInternetGatewayQueryParams withAction(PostDeleteInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteInternetGatewayVersionEnum version;
    public PostDeleteInternetGatewayQueryParams withVersion(PostDeleteInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}