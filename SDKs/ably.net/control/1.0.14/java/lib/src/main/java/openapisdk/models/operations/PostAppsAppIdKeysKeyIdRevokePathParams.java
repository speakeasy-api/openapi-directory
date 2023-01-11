package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdKeysKeyIdRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PostAppsAppIdKeysKeyIdRevokePathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public PostAppsAppIdKeysKeyIdRevokePathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}