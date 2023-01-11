package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToCertificateRequest {
    public AddTagsToCertificateHeaders headers;
    public AddTagsToCertificateRequest withHeaders(AddTagsToCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTagsToCertificateRequest request;
    public AddTagsToCertificateRequest withRequest(openapisdk.models.shared.AddTagsToCertificateRequest request) {
        this.request = request;
        return this;
    }
}