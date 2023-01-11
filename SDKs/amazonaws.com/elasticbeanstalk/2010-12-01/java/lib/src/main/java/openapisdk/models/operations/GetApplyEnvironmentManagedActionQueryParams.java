package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplyEnvironmentManagedActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetApplyEnvironmentManagedActionActionEnum action;
    public GetApplyEnvironmentManagedActionQueryParams withAction(GetApplyEnvironmentManagedActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActionId")
    public String actionId;
    public GetApplyEnvironmentManagedActionQueryParams withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetApplyEnvironmentManagedActionQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetApplyEnvironmentManagedActionQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetApplyEnvironmentManagedActionVersionEnum version;
    public GetApplyEnvironmentManagedActionQueryParams withVersion(GetApplyEnvironmentManagedActionVersionEnum version) {
        this.version = version;
        return this;
    }
}