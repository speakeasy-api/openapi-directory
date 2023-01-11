package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNamespaceRequest {
    public DeleteNamespaceHeaders headers;
    public DeleteNamespaceRequest withHeaders(DeleteNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteNamespaceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}