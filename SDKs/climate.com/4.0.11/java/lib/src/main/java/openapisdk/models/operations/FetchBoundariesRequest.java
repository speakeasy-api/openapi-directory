package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBoundariesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BoundariesQuery request;
    public FetchBoundariesRequest withRequest(openapisdk.models.shared.BoundariesQuery request) {
        this.request = request;
        return this;
    }
    public FetchBoundariesSecurity security;
    public FetchBoundariesRequest withSecurity(FetchBoundariesSecurity security) {
        this.security = security;
        return this;
    }
}