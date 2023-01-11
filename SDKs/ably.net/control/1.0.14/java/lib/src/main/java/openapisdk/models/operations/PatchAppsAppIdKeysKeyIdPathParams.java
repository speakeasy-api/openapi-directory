package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdKeysKeyIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_id")
    public String appId;
    public PatchAppsAppIdKeysKeyIdPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key_id")
    public String keyId;
    public PatchAppsAppIdKeysKeyIdPathParams withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}