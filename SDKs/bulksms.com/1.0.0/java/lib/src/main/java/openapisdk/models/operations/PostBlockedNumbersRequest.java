package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBlockedNumbersRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostBlockedNumbersRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
    public PostBlockedNumbersSecurity security;
    public PostBlockedNumbersRequest withSecurity(PostBlockedNumbersSecurity security) {
        this.security = security;
        return this;
    }
}