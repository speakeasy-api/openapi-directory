package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateInstallationAccessTokenRequest {
    public AppsCreateInstallationAccessTokenPathParams pathParams;
    public AppsCreateInstallationAccessTokenRequest withPathParams(AppsCreateInstallationAccessTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppsCreateInstallationAccessTokenHeaders headers;
    public AppsCreateInstallationAccessTokenRequest withHeaders(AppsCreateInstallationAccessTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsCreateInstallationAccessTokenRequestBody request;
    public AppsCreateInstallationAccessTokenRequest withRequest(AppsCreateInstallationAccessTokenRequestBody request) {
        this.request = request;
        return this;
    }
}