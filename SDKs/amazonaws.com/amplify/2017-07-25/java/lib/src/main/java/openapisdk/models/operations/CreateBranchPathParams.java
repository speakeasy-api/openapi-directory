package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateBranchPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}