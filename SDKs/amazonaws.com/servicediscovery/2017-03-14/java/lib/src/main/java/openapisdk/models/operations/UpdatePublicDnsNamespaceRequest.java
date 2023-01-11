package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePublicDnsNamespaceRequest {
    public UpdatePublicDnsNamespaceHeaders headers;
    public UpdatePublicDnsNamespaceRequest withHeaders(UpdatePublicDnsNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePublicDnsNamespaceRequest request;
    public UpdatePublicDnsNamespaceRequest withRequest(openapisdk.models.shared.UpdatePublicDnsNamespaceRequest request) {
        this.request = request;
        return this;
    }
}