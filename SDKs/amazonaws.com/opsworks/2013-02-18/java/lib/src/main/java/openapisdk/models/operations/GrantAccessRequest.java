package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GrantAccessRequest {
    public GrantAccessHeaders headers;
    public GrantAccessRequest withHeaders(GrantAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GrantAccessRequest request;
    public GrantAccessRequest withRequest(openapisdk.models.shared.GrantAccessRequest request) {
        this.request = request;
        return this;
    }
}