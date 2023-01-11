package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdNamespacesNamespaceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PatchAppsAppIdNamespacesNamespaceIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=namespace_id")
    public String namespaceId;
    public PatchAppsAppIdNamespacesNamespaceIdPathParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}