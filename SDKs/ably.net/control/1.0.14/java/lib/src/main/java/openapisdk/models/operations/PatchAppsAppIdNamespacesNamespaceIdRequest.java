package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdNamespacesNamespaceIdRequest {
    public PatchAppsAppIdNamespacesNamespaceIdPathParams pathParams;
    public PatchAppsAppIdNamespacesNamespaceIdRequest withPathParams(PatchAppsAppIdNamespacesNamespaceIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NamespacePatch request;
    public PatchAppsAppIdNamespacesNamespaceIdRequest withRequest(openapisdk.models.shared.NamespacePatch request) {
        this.request = request;
        return this;
    }
    public PatchAppsAppIdNamespacesNamespaceIdSecurity security;
    public PatchAppsAppIdNamespacesNamespaceIdRequest withSecurity(PatchAppsAppIdNamespacesNamespaceIdSecurity security) {
        this.security = security;
        return this;
    }
}