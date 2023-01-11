package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNamespaceRequest {
    public DeleteNamespaceHeaders headers;
    public DeleteNamespaceRequest withHeaders(DeleteNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteNamespaceRequest request;
    public DeleteNamespaceRequest withRequest(openapisdk.models.shared.DeleteNamespaceRequest request) {
        this.request = request;
        return this;
    }
}