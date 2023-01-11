package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdNamespacesRequest {
    public PostAppsAppIdNamespacesPathParams pathParams;
    public PostAppsAppIdNamespacesRequest withPathParams(PostAppsAppIdNamespacesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NamespacePost request;
    public PostAppsAppIdNamespacesRequest withRequest(openapisdk.models.shared.NamespacePost request) {
        this.request = request;
        return this;
    }
    public PostAppsAppIdNamespacesSecurity security;
    public PostAppsAppIdNamespacesRequest withSecurity(PostAppsAppIdNamespacesSecurity security) {
        this.security = security;
        return this;
    }
}