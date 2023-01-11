package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResolveCustomerRequest {
    public ResolveCustomerHeaders headers;
    public ResolveCustomerRequest withHeaders(ResolveCustomerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResolveCustomerRequest request;
    public ResolveCustomerRequest withRequest(openapisdk.models.shared.ResolveCustomerRequest request) {
        this.request = request;
        return this;
    }
}