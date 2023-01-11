package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportCertificateRequest {
    public ImportCertificateHeaders headers;
    public ImportCertificateRequest withHeaders(ImportCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportCertificateRequest request;
    public ImportCertificateRequest withRequest(openapisdk.models.shared.ImportCertificateRequest request) {
        this.request = request;
        return this;
    }
}