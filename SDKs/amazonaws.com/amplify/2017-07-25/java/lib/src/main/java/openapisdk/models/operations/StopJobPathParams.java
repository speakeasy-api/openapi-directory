package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public StopJobPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public StopJobPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public StopJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}