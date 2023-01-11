package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListJobsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public ListJobsPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
}