package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportClientVpnClientCertificateRevocationListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExportClientVpnClientCertificateRevocationListActionEnum action;
    public PostExportClientVpnClientCertificateRevocationListQueryParams withAction(PostExportClientVpnClientCertificateRevocationListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExportClientVpnClientCertificateRevocationListVersionEnum version;
    public PostExportClientVpnClientCertificateRevocationListQueryParams withVersion(PostExportClientVpnClientCertificateRevocationListVersionEnum version) {
        this.version = version;
        return this;
    }
}