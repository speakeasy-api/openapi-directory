package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBackendJobsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appId")
    public String appId;
    public ListBackendJobsPathParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=backendEnvironmentName")
    public String backendEnvironmentName;
    public ListBackendJobsPathParams withBackendEnvironmentName(String backendEnvironmentName) {
        this.backendEnvironmentName = backendEnvironmentName;
        return this;
    }
}