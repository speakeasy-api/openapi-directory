package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClcerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ClcerRequestBody request;
    public ClcerRequest withRequest(ClcerRequestBody request) {
        this.request = request;
        return this;
    }
    public ClcerSecurity security;
    public ClcerRequest withSecurity(ClcerSecurity security) {
        this.security = security;
        return this;
    }
}