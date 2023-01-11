package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTerminateEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTerminateEnvironmentActionEnum action;
    public GetTerminateEnvironmentQueryParams withAction(GetTerminateEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetTerminateEnvironmentQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetTerminateEnvironmentQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForceTerminate")
    public Boolean forceTerminate;
    public GetTerminateEnvironmentQueryParams withForceTerminate(Boolean forceTerminate) {
        this.forceTerminate = forceTerminate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TerminateResources")
    public Boolean terminateResources;
    public GetTerminateEnvironmentQueryParams withTerminateResources(Boolean terminateResources) {
        this.terminateResources = terminateResources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTerminateEnvironmentVersionEnum version;
    public GetTerminateEnvironmentQueryParams withVersion(GetTerminateEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}