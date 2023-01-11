package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthOauthTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PostAuthOauthTokenRequestBody request;
    public PostAuthOauthTokenRequest withRequest(PostAuthOauthTokenRequestBody request) {
        this.request = request;
        return this;
    }
}