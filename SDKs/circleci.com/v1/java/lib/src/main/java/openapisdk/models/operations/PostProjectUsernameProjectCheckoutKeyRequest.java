package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectCheckoutKeyRequest {
    public PostProjectUsernameProjectCheckoutKeyPathParams pathParams;
    public PostProjectUsernameProjectCheckoutKeyRequest withPathParams(PostProjectUsernameProjectCheckoutKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProjectUsernameProjectCheckoutKeyRequestBodyEnum request;
    public PostProjectUsernameProjectCheckoutKeyRequest withRequest(PostProjectUsernameProjectCheckoutKeyRequestBodyEnum request) {
        this.request = request;
        return this;
    }
}