package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBackendJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public UpdateBackendJobPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=backendEnvironmentName")
    public String backendEnvironmentName;
    public UpdateBackendJobPathParams withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public UpdateBackendJobPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}