package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackageGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPackageGetPathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}