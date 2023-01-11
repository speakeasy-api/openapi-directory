package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public GetJobPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branchName")
    public String branchName;
    public GetJobPathParams withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}