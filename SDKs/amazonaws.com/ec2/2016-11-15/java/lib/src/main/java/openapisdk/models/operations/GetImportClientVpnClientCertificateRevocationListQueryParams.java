package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImportClientVpnClientCertificateRevocationListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetImportClientVpnClientCertificateRevocationListActionEnum action;
    public GetImportClientVpnClientCertificateRevocationListQueryParams withAction(GetImportClientVpnClientCertificateRevocationListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateRevocationList")
    public String certificateRevocationList;
    public GetImportClientVpnClientCertificateRevocationListQueryParams withCertificateRevocationList(String certificateRevocationList) {
        this.certificateRevocationList = certificateRevocationList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetImportClientVpnClientCertificateRevocationListQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetImportClientVpnClientCertificateRevocationListQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetImportClientVpnClientCertificateRevocationListVersionEnum version;
    public GetImportClientVpnClientCertificateRevocationListQueryParams withVersion(GetImportClientVpnClientCertificateRevocationListVersionEnum version) {
        this.version = version;
        return this;
    }
}