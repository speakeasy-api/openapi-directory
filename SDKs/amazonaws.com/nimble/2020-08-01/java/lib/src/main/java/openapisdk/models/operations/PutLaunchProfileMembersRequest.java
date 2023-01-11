package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLaunchProfileMembersRequest {
    public PutLaunchProfileMembersPathParams pathParams;
    public PutLaunchProfileMembersRequest withPathParams(PutLaunchProfileMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutLaunchProfileMembersHeaders headers;
    public PutLaunchProfileMembersRequest withHeaders(PutLaunchProfileMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutLaunchProfileMembersRequestBody request;
    public PutLaunchProfileMembersRequest withRequest(PutLaunchProfileMembersRequestBody request) {
        this.request = request;
        return this;
    }
}