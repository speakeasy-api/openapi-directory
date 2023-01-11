package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateProvisionedProductRequest {
    public TerminateProvisionedProductHeaders headers;
    public TerminateProvisionedProductRequest withHeaders(TerminateProvisionedProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TerminateProvisionedProductInput request;
    public TerminateProvisionedProductRequest withRequest(openapisdk.models.shared.TerminateProvisionedProductInput request) {
        this.request = request;
        return this;
    }
}