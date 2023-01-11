package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClientVpnEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClientVpnEndpointActionEnum action;
    public GetDeleteClientVpnEndpointQueryParams withAction(GetDeleteClientVpnEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetDeleteClientVpnEndpointQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteClientVpnEndpointQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClientVpnEndpointVersionEnum version;
    public GetDeleteClientVpnEndpointQueryParams withVersion(GetDeleteClientVpnEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}