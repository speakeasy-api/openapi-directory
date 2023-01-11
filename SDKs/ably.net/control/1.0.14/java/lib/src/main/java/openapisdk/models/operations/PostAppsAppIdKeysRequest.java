package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdKeysRequest {
    public PostAppsAppIdKeysPathParams pathParams;
    public PostAppsAppIdKeysRequest withPathParams(PostAppsAppIdKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyPost request;
    public PostAppsAppIdKeysRequest withRequest(openapisdk.models.shared.KeyPost request) {
        this.request = request;
        return this;
    }
    public PostAppsAppIdKeysSecurity security;
    public PostAppsAppIdKeysRequest withSecurity(PostAppsAppIdKeysSecurity security) {
        this.security = security;
        return this;
    }
}