package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePrivateDnsNamespaceRequest {
    public UpdatePrivateDnsNamespaceHeaders headers;
    public UpdatePrivateDnsNamespaceRequest withHeaders(UpdatePrivateDnsNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePrivateDnsNamespaceRequest request;
    public UpdatePrivateDnsNamespaceRequest withRequest(openapisdk.models.shared.UpdatePrivateDnsNamespaceRequest request) {
        this.request = request;
        return this;
    }
}