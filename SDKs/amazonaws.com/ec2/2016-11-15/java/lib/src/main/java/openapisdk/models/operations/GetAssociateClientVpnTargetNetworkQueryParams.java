package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateClientVpnTargetNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateClientVpnTargetNetworkActionEnum action;
    public GetAssociateClientVpnTargetNetworkQueryParams withAction(GetAssociateClientVpnTargetNetworkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetAssociateClientVpnTargetNetworkQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetAssociateClientVpnTargetNetworkQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateClientVpnTargetNetworkQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetId")
    public String subnetId;
    public GetAssociateClientVpnTargetNetworkQueryParams withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateClientVpnTargetNetworkVersionEnum version;
    public GetAssociateClientVpnTargetNetworkQueryParams withVersion(GetAssociateClientVpnTargetNetworkVersionEnum version) {
        this.version = version;
        return this;
    }
}