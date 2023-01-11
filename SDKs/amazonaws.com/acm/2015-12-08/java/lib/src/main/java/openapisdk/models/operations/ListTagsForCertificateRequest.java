package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForCertificateRequest {
    public ListTagsForCertificateHeaders headers;
    public ListTagsForCertificateRequest withHeaders(ListTagsForCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForCertificateRequest request;
    public ListTagsForCertificateRequest withRequest(openapisdk.models.shared.ListTagsForCertificateRequest request) {
        this.request = request;
        return this;
    }
}