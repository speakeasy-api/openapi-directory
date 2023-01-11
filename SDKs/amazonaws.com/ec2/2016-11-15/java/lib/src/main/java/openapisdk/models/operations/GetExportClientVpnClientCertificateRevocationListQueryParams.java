package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportClientVpnClientCertificateRevocationListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetExportClientVpnClientCertificateRevocationListActionEnum action;
    public GetExportClientVpnClientCertificateRevocationListQueryParams withAction(GetExportClientVpnClientCertificateRevocationListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetExportClientVpnClientCertificateRevocationListQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetExportClientVpnClientCertificateRevocationListQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetExportClientVpnClientCertificateRevocationListVersionEnum version;
    public GetExportClientVpnClientCertificateRevocationListQueryParams withVersion(GetExportClientVpnClientCertificateRevocationListVersionEnum version) {
        this.version = version;
        return this;
    }
}