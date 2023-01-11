package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdKeysKeyIdRequest {
    public PatchAppsAppIdKeysKeyIdPathParams pathParams;
    public PatchAppsAppIdKeysKeyIdRequest withPathParams(PatchAppsAppIdKeysKeyIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyPatch request;
    public PatchAppsAppIdKeysKeyIdRequest withRequest(openapisdk.models.shared.KeyPatch request) {
        this.request = request;
        return this;
    }
    public PatchAppsAppIdKeysKeyIdSecurity security;
    public PatchAppsAppIdKeysKeyIdRequest withSecurity(PatchAppsAppIdKeysKeyIdSecurity security) {
        this.security = security;
        return this;
    }
}