package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportClientVpnClientCertificateRevocationListRequest {
    public PostExportClientVpnClientCertificateRevocationListQueryParams queryParams;
    public PostExportClientVpnClientCertificateRevocationListRequest withQueryParams(PostExportClientVpnClientCertificateRevocationListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExportClientVpnClientCertificateRevocationListHeaders headers;
    public PostExportClientVpnClientCertificateRevocationListRequest withHeaders(PostExportClientVpnClientCertificateRevocationListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExportClientVpnClientCertificateRevocationListRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}