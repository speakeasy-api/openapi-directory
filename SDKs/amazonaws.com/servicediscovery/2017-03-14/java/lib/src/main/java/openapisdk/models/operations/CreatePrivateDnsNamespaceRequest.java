package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePrivateDnsNamespaceRequest {
    public CreatePrivateDnsNamespaceHeaders headers;
    public CreatePrivateDnsNamespaceRequest withHeaders(CreatePrivateDnsNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePrivateDnsNamespaceRequest request;
    public CreatePrivateDnsNamespaceRequest withRequest(openapisdk.models.shared.CreatePrivateDnsNamespaceRequest request) {
        this.request = request;
        return this;
    }
}