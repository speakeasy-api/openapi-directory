package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGet3dsAvailabilityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostGet3dsAvailabilityRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostGet3dsAvailabilitySecurity security;
    public PostGet3dsAvailabilityRequest withSecurity(PostGet3dsAvailabilitySecurity security) {
        this.security = security;
        return this;
    }
}