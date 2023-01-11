package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachInternetGatewayActionEnum action;
    public PostAttachInternetGatewayQueryParams withAction(PostAttachInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachInternetGatewayVersionEnum version;
    public PostAttachInternetGatewayQueryParams withVersion(PostAttachInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}