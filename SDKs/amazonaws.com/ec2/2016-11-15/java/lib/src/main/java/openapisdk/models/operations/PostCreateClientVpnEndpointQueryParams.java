package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClientVpnEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClientVpnEndpointActionEnum action;
    public PostCreateClientVpnEndpointQueryParams withAction(PostCreateClientVpnEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClientVpnEndpointVersionEnum version;
    public PostCreateClientVpnEndpointQueryParams withVersion(PostCreateClientVpnEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}