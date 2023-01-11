package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportCertificateAuthorityCertificateRequest {
    public ImportCertificateAuthorityCertificateHeaders headers;
    public ImportCertificateAuthorityCertificateRequest withHeaders(ImportCertificateAuthorityCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportCertificateAuthorityCertificateRequest request;
    public ImportCertificateAuthorityCertificateRequest withRequest(openapisdk.models.shared.ImportCertificateAuthorityCertificateRequest request) {
        this.request = request;
        return this;
    }
}