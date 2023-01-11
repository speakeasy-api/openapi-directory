package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportCertificateRequest {
    public ExportCertificateHeaders headers;
    public ExportCertificateRequest withHeaders(ExportCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportCertificateRequest request;
    public ExportCertificateRequest withRequest(openapisdk.models.shared.ExportCertificateRequest request) {
        this.request = request;
        return this;
    }
}