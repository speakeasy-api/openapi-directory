package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRestartAppServerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestartAppServerActionEnum action;
    public GetRestartAppServerQueryParams withAction(GetRestartAppServerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetRestartAppServerQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetRestartAppServerQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestartAppServerVersionEnum version;
    public GetRestartAppServerQueryParams withVersion(GetRestartAppServerVersionEnum version) {
        this.version = version;
        return this;
    }
}