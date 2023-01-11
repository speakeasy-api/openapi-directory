package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptPageRequest {
    public AcceptPageHeaders headers;
    public AcceptPageRequest withHeaders(AcceptPageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptPageRequest request;
    public AcceptPageRequest withRequest(openapisdk.models.shared.AcceptPageRequest request) {
        this.request = request;
        return this;
    }
}