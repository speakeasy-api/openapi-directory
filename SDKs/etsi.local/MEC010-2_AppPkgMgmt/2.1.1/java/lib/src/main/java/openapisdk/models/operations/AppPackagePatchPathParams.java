package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackagePatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPackagePatchPathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}