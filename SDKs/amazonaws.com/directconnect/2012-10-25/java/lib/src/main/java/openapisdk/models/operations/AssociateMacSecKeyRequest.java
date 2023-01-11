package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateMacSecKeyRequest {
    public AssociateMacSecKeyHeaders headers;
    public AssociateMacSecKeyRequest withHeaders(AssociateMacSecKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateMacSecKeyRequest request;
    public AssociateMacSecKeyRequest withRequest(openapisdk.models.shared.AssociateMacSecKeyRequest request) {
        this.request = request;
        return this;
    }
}