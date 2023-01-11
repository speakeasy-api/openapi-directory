package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppDgetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appDId")
    public String appDId;
    public AppDgetPathParams withAppDId(String appDId) {
        this.appDId = appDId;
        return this;
    }
}