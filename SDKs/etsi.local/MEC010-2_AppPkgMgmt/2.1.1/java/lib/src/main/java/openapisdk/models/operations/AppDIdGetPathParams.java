package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppDIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appDId")
    public String appDId;
    public AppDIdGetPathParams withAppDId(String appDId) {
        this.appDId = appDId;
        return this;
    }
}