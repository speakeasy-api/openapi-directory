package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NooclRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NooclRequestBody request;
    public NooclRequest withRequest(NooclRequestBody request) {
        this.request = request;
        return this;
    }
    public NooclSecurity security;
    public NooclRequest withSecurity(NooclSecurity security) {
        this.security = security;
        return this;
    }
}