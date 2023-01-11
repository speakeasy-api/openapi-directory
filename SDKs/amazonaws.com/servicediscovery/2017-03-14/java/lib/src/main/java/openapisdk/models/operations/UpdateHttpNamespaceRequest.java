package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHttpNamespaceRequest {
    public UpdateHttpNamespaceHeaders headers;
    public UpdateHttpNamespaceRequest withHeaders(UpdateHttpNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateHttpNamespaceRequest request;
    public UpdateHttpNamespaceRequest withRequest(openapisdk.models.shared.UpdateHttpNamespaceRequest request) {
        this.request = request;
        return this;
    }
}