package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsAppIdNamespacesNamespaceIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public DeleteAppsAppIdNamespacesNamespaceIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=namespace_id")
    public String namespaceId;
    public DeleteAppsAppIdNamespacesNamespaceIdPathParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
}