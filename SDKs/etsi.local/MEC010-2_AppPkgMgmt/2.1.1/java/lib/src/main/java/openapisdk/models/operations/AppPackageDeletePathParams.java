package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackageDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPackageDeletePathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}