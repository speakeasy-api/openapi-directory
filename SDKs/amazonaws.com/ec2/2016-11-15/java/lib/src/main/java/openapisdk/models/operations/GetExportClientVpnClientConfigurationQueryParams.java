package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportClientVpnClientConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetExportClientVpnClientConfigurationActionEnum action;
    public GetExportClientVpnClientConfigurationQueryParams withAction(GetExportClientVpnClientConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetExportClientVpnClientConfigurationQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetExportClientVpnClientConfigurationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetExportClientVpnClientConfigurationVersionEnum version;
    public GetExportClientVpnClientConfigurationQueryParams withVersion(GetExportClientVpnClientConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}