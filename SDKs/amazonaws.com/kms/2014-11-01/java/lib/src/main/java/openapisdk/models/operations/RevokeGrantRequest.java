package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeGrantRequest {
    public RevokeGrantHeaders headers;
    public RevokeGrantRequest withHeaders(RevokeGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeGrantRequest request;
    public RevokeGrantRequest withRequest(openapisdk.models.shared.RevokeGrantRequest request) {
        this.request = request;
        return this;
    }
}