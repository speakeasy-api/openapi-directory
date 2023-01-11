package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamespaceRequest {
    public GetNamespaceHeaders headers;
    public GetNamespaceRequest withHeaders(GetNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetNamespaceRequest request;
    public GetNamespaceRequest withRequest(openapisdk.models.shared.GetNamespaceRequest request) {
        this.request = request;
        return this;
    }
}