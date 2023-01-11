package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPkgGetPathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}