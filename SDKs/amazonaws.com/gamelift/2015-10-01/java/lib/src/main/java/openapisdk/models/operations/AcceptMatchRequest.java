package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptMatchRequest {
    public AcceptMatchHeaders headers;
    public AcceptMatchRequest withHeaders(AcceptMatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptMatchInput request;
    public AcceptMatchRequest withRequest(openapisdk.models.shared.AcceptMatchInput request) {
        this.request = request;
        return this;
    }
}