package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectSshKeyRequest {
    public PostProjectUsernameProjectSshKeyPathParams pathParams;
    public PostProjectUsernameProjectSshKeyRequest withPathParams(PostProjectUsernameProjectSshKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostProjectUsernameProjectSshKeyHeaders headers;
    public PostProjectUsernameProjectSshKeyRequest withHeaders(PostProjectUsernameProjectSshKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostProjectUsernameProjectSshKeyRequestBody request;
    public PostProjectUsernameProjectSshKeyRequest withRequest(PostProjectUsernameProjectSshKeyRequestBody request) {
        this.request = request;
        return this;
    }
}