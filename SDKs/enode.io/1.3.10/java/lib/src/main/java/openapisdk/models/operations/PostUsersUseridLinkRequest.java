package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUseridLinkRequest {
    public PostUsersUseridLinkPathParams pathParams;
    public PostUsersUseridLinkRequest withPathParams(PostUsersUseridLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostUsersUseridLinkRequestBody request;
    public PostUsersUseridLinkRequest withRequest(PostUsersUseridLinkRequestBody request) {
        this.request = request;
        return this;
    }
    public PostUsersUseridLinkSecurity security;
    public PostUsersUseridLinkRequest withSecurity(PostUsersUseridLinkSecurity security) {
        this.security = security;
        return this;
    }
}