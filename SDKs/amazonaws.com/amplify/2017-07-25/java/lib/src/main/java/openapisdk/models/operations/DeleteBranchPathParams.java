package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBranchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public DeleteBranchPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public DeleteBranchPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}