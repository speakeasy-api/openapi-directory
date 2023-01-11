package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebuildEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRebuildEnvironmentActionEnum action;
    public GetRebuildEnvironmentQueryParams withAction(GetRebuildEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetRebuildEnvironmentQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetRebuildEnvironmentQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRebuildEnvironmentVersionEnum version;
    public GetRebuildEnvironmentQueryParams withVersion(GetRebuildEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}