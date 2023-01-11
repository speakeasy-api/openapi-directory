package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClientVpnEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClientVpnEndpointActionEnum action;
    public PostModifyClientVpnEndpointQueryParams withAction(PostModifyClientVpnEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClientVpnEndpointVersionEnum version;
    public PostModifyClientVpnEndpointQueryParams withVersion(PostModifyClientVpnEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}