package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateClientVpnTargetNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateClientVpnTargetNetworkActionEnum action;
    public PostDisassociateClientVpnTargetNetworkQueryParams withAction(PostDisassociateClientVpnTargetNetworkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateClientVpnTargetNetworkVersionEnum version;
    public PostDisassociateClientVpnTargetNetworkQueryParams withVersion(PostDisassociateClientVpnTargetNetworkVersionEnum version) {
        this.version = version;
        return this;
    }
}