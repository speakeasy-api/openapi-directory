package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public StartJobPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public StartJobPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}