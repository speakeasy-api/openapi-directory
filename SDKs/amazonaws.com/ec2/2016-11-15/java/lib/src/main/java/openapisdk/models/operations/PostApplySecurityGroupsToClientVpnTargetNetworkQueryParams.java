package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum action;
    public PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams withAction(PostApplySecurityGroupsToClientVpnTargetNetworkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum version;
    public PostApplySecurityGroupsToClientVpnTargetNetworkQueryParams withVersion(PostApplySecurityGroupsToClientVpnTargetNetworkVersionEnum version) {
        this.version = version;
        return this;
    }
}