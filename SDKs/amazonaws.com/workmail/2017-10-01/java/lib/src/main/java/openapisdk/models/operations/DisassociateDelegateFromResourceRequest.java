package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDelegateFromResourceRequest {
    public DisassociateDelegateFromResourceHeaders headers;
    public DisassociateDelegateFromResourceRequest withHeaders(DisassociateDelegateFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateDelegateFromResourceRequest request;
    public DisassociateDelegateFromResourceRequest withRequest(openapisdk.models.shared.DisassociateDelegateFromResourceRequest request) {
        this.request = request;
        return this;
    }
}