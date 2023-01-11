package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsIdRequest {
    public PatchAppsIdPathParams pathParams;
    public PatchAppsIdRequest withPathParams(PatchAppsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppPatch request;
    public PatchAppsIdRequest withRequest(openapisdk.models.shared.AppPatch request) {
        this.request = request;
        return this;
    }
    public PatchAppsIdSecurity security;
    public PatchAppsIdRequest withSecurity(PatchAppsIdSecurity security) {
        this.security = security;
        return this;
    }
}