package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutImageTagMutabilityRequest {
    public PutImageTagMutabilityHeaders headers;
    public PutImageTagMutabilityRequest withHeaders(PutImageTagMutabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutImageTagMutabilityRequest request;
    public PutImageTagMutabilityRequest withRequest(openapisdk.models.shared.PutImageTagMutabilityRequest request) {
        this.request = request;
        return this;
    }
}