package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateClientVpnTargetNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateClientVpnTargetNetworkActionEnum action;
    public GetDisassociateClientVpnTargetNetworkQueryParams withAction(GetDisassociateClientVpnTargetNetworkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateClientVpnTargetNetworkQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetDisassociateClientVpnTargetNetworkQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisassociateClientVpnTargetNetworkQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateClientVpnTargetNetworkVersionEnum version;
    public GetDisassociateClientVpnTargetNetworkQueryParams withVersion(GetDisassociateClientVpnTargetNetworkVersionEnum version) {
        this.version = version;
        return this;
    }
}