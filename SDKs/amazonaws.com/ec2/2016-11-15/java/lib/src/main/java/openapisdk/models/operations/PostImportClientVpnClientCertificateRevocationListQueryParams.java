package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportClientVpnClientCertificateRevocationListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportClientVpnClientCertificateRevocationListActionEnum action;
    public PostImportClientVpnClientCertificateRevocationListQueryParams withAction(PostImportClientVpnClientCertificateRevocationListActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportClientVpnClientCertificateRevocationListVersionEnum version;
    public PostImportClientVpnClientCertificateRevocationListQueryParams withVersion(PostImportClientVpnClientCertificateRevocationListVersionEnum version) {
        this.version = version;
        return this;
    }
}