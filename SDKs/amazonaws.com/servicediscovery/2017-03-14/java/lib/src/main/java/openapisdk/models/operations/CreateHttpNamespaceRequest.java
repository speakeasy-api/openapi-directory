package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateHttpNamespaceRequest {
    public CreateHttpNamespaceHeaders headers;
    public CreateHttpNamespaceRequest withHeaders(CreateHttpNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateHttpNamespaceRequest request;
    public CreateHttpNamespaceRequest withRequest(openapisdk.models.shared.CreateHttpNamespaceRequest request) {
        this.request = request;
        return this;
    }
}