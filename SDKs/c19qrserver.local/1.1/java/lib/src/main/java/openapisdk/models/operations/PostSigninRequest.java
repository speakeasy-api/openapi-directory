package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSigninRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Signin request;
    public PostSigninRequest withRequest(openapisdk.models.shared.Signin request) {
        this.request = request;
        return this;
    }
}