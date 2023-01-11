package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPkgIdGetPathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}