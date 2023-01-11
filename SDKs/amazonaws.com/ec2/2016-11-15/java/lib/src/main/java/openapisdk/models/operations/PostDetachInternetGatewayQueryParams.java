package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachInternetGatewayActionEnum action;
    public PostDetachInternetGatewayQueryParams withAction(PostDetachInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachInternetGatewayVersionEnum version;
    public PostDetachInternetGatewayQueryParams withVersion(PostDetachInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}