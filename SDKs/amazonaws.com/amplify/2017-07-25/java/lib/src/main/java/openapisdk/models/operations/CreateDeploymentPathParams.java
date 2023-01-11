package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public CreateDeploymentPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public CreateDeploymentPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}