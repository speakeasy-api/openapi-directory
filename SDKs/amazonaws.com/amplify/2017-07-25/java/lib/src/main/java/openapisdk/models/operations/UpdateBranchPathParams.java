package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public UpdateBranchPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public UpdateBranchPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}