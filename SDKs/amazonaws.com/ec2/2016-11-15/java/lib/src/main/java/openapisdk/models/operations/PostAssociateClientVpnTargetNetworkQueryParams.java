package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateClientVpnTargetNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateClientVpnTargetNetworkActionEnum action;
    public PostAssociateClientVpnTargetNetworkQueryParams withAction(PostAssociateClientVpnTargetNetworkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateClientVpnTargetNetworkVersionEnum version;
    public PostAssociateClientVpnTargetNetworkQueryParams withVersion(PostAssociateClientVpnTargetNetworkVersionEnum version) {
        this.version = version;
        return this;
    }
}