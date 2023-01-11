package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateInternetGatewayActionEnum action;
    public PostCreateInternetGatewayQueryParams withAction(PostCreateInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateInternetGatewayVersionEnum version;
    public PostCreateInternetGatewayQueryParams withVersion(PostCreateInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}