package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterTaskDefinitionRequest {
    public DeregisterTaskDefinitionHeaders headers;
    public DeregisterTaskDefinitionRequest withHeaders(DeregisterTaskDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterTaskDefinitionRequest request;
    public DeregisterTaskDefinitionRequest withRequest(openapisdk.models.shared.DeregisterTaskDefinitionRequest request) {
        this.request = request;
        return this;
    }
}