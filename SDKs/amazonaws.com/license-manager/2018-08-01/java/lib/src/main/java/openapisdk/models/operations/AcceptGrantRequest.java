package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptGrantRequest {
    public AcceptGrantHeaders headers;
    public AcceptGrantRequest withHeaders(AcceptGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptGrantRequest request;
    public AcceptGrantRequest withRequest(openapisdk.models.shared.AcceptGrantRequest request) {
        this.request = request;
        return this;
    }
}