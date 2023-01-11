package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClientVpnEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClientVpnEndpointActionEnum action;
    public PostDeleteClientVpnEndpointQueryParams withAction(PostDeleteClientVpnEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClientVpnEndpointVersionEnum version;
    public PostDeleteClientVpnEndpointQueryParams withVersion(PostDeleteClientVpnEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}