package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateMacSecKeyRequest {
    public DisassociateMacSecKeyHeaders headers;
    public DisassociateMacSecKeyRequest withHeaders(DisassociateMacSecKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateMacSecKeyRequest request;
    public DisassociateMacSecKeyRequest withRequest(openapisdk.models.shared.DisassociateMacSecKeyRequest request) {
        this.request = request;
        return this;
    }
}