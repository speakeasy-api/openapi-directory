package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTestCardRangesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostCreateTestCardRangesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostCreateTestCardRangesSecurity security;
    public PostCreateTestCardRangesRequest withSecurity(PostCreateTestCardRangesSecurity security) {
        this.security = security;
        return this;
    }
}