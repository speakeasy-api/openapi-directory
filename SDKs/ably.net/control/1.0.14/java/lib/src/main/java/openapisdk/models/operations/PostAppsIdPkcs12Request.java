package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsIdPkcs12Request {
    public PostAppsIdPkcs12PathParams pathParams;
    public PostAppsIdPkcs12Request withPathParams(PostAppsIdPkcs12PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.AppPkcs12 request;
    public PostAppsIdPkcs12Request withRequest(openapisdk.models.shared.AppPkcs12 request) {
        this.request = request;
        return this;
    }
    public PostAppsIdPkcs12Security security;
    public PostAppsIdPkcs12Request withSecurity(PostAppsIdPkcs12Security security) {
        this.security = security;
        return this;
    }
}