package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportClientVpnClientCertificateRevocationListRequest {
    public PostImportClientVpnClientCertificateRevocationListQueryParams queryParams;
    public PostImportClientVpnClientCertificateRevocationListRequest withQueryParams(PostImportClientVpnClientCertificateRevocationListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportClientVpnClientCertificateRevocationListHeaders headers;
    public PostImportClientVpnClientCertificateRevocationListRequest withHeaders(PostImportClientVpnClientCertificateRevocationListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportClientVpnClientCertificateRevocationListRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}