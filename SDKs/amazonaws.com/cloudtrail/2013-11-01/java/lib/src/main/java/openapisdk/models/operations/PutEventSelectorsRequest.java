package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventSelectorsRequest {
    public PutEventSelectorsHeaders headers;
    public PutEventSelectorsRequest withHeaders(PutEventSelectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutEventSelectorsRequest request;
    public PutEventSelectorsRequest withRequest(openapisdk.models.shared.PutEventSelectorsRequest request) {
        this.request = request;
        return this;
    }
}