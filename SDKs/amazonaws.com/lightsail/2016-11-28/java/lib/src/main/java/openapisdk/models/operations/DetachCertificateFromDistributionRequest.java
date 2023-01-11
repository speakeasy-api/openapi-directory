package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachCertificateFromDistributionRequest {
    public DetachCertificateFromDistributionHeaders headers;
    public DetachCertificateFromDistributionRequest withHeaders(DetachCertificateFromDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachCertificateFromDistributionRequest request;
    public DetachCertificateFromDistributionRequest withRequest(openapisdk.models.shared.DetachCertificateFromDistributionRequest request) {
        this.request = request;
        return this;
    }
}