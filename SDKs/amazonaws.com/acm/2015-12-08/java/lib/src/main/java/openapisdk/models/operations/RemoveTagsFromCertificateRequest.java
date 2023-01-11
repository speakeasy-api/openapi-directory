package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromCertificateRequest {
    public RemoveTagsFromCertificateHeaders headers;
    public RemoveTagsFromCertificateRequest withHeaders(RemoveTagsFromCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsFromCertificateRequest request;
    public RemoveTagsFromCertificateRequest withRequest(openapisdk.models.shared.RemoveTagsFromCertificateRequest request) {
        this.request = request;
        return this;
    }
}