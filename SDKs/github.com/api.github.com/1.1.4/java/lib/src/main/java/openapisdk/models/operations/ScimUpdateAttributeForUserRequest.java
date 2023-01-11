package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScimUpdateAttributeForUserRequest {
    public ScimUpdateAttributeForUserPathParams pathParams;
    public ScimUpdateAttributeForUserRequest withPathParams(ScimUpdateAttributeForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ScimUpdateAttributeForUserRequestBody request;
    public ScimUpdateAttributeForUserRequest withRequest(ScimUpdateAttributeForUserRequestBody request) {
        this.request = request;
        return this;
    }
}