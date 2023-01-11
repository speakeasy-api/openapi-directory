package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetOnboardingUrlRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGetOnboardingUrlRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGetOnboardingUrlSecurity security;
    public PostGetOnboardingUrlRequest withSecurity(PostGetOnboardingUrlSecurity security) {
        this.security = security;
        return this;
    }
}