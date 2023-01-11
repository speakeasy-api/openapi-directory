package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAbortEnvironmentUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAbortEnvironmentUpdateActionEnum action;
    public GetAbortEnvironmentUpdateQueryParams withAction(GetAbortEnvironmentUpdateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetAbortEnvironmentUpdateQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetAbortEnvironmentUpdateQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAbortEnvironmentUpdateVersionEnum version;
    public GetAbortEnvironmentUpdateQueryParams withVersion(GetAbortEnvironmentUpdateVersionEnum version) {
        this.version = version;
        return this;
    }
}