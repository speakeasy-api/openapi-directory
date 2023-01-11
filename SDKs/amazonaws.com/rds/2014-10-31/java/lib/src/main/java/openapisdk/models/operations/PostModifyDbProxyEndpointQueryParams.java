package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbProxyEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbProxyEndpointActionEnum action;
    public PostModifyDbProxyEndpointQueryParams withAction(PostModifyDbProxyEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbProxyEndpointVersionEnum version;
    public PostModifyDbProxyEndpointQueryParams withVersion(PostModifyDbProxyEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}