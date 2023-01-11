package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportClientVpnClientConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExportClientVpnClientConfigurationActionEnum action;
    public PostExportClientVpnClientConfigurationQueryParams withAction(PostExportClientVpnClientConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExportClientVpnClientConfigurationVersionEnum version;
    public PostExportClientVpnClientConfigurationQueryParams withVersion(PostExportClientVpnClientConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}