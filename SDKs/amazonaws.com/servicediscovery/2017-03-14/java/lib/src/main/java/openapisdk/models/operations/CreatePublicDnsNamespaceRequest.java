package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePublicDnsNamespaceRequest {
    public CreatePublicDnsNamespaceHeaders headers;
    public CreatePublicDnsNamespaceRequest withHeaders(CreatePublicDnsNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePublicDnsNamespaceRequest request;
    public CreatePublicDnsNamespaceRequest withRequest(openapisdk.models.shared.CreatePublicDnsNamespaceRequest request) {
        this.request = request;
        return this;
    }
}