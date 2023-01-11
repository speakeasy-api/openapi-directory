package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountsAccountIdAppsRequest {
    public PostAccountsAccountIdAppsPathParams pathParams;
    public PostAccountsAccountIdAppsRequest withPathParams(PostAccountsAccountIdAppsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppPost request;
    public PostAccountsAccountIdAppsRequest withRequest(openapisdk.models.shared.AppPost request) {
        this.request = request;
        return this;
    }
    public PostAccountsAccountIdAppsSecurity security;
    public PostAccountsAccountIdAppsRequest withSecurity(PostAccountsAccountIdAppsSecurity security) {
        this.security = security;
        return this;
    }
}