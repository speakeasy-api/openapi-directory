package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostDisableRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostDisableSecurity security;
    public PostDisableRequest withSecurity(PostDisableSecurity security) {
        this.security = security;
        return this;
    }
}