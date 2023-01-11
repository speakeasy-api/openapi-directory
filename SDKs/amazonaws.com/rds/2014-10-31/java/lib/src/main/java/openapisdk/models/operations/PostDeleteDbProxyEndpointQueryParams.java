package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbProxyEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbProxyEndpointActionEnum action;
    public PostDeleteDbProxyEndpointQueryParams withAction(PostDeleteDbProxyEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbProxyEndpointVersionEnum version;
    public PostDeleteDbProxyEndpointQueryParams withVersion(PostDeleteDbProxyEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}