package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgPutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appPkgId")
    public String appPkgId;
    public AppPkgPutPathParams withAppPkgId(String appPkgId) {
        this.appPkgId = appPkgId;
        return this;
    }
}