package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbProxyEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbProxyEndpointActionEnum action;
    public PostCreateDbProxyEndpointQueryParams withAction(PostCreateDbProxyEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbProxyEndpointVersionEnum version;
    public PostCreateDbProxyEndpointQueryParams withVersion(PostCreateDbProxyEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}