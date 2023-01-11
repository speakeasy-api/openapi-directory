package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachCertificateToDistributionRequest {
    public AttachCertificateToDistributionHeaders headers;
    public AttachCertificateToDistributionRequest withHeaders(AttachCertificateToDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachCertificateToDistributionRequest request;
    public AttachCertificateToDistributionRequest withRequest(openapisdk.models.shared.AttachCertificateToDistributionRequest request) {
        this.request = request;
        return this;
    }
}