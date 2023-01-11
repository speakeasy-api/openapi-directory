package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEnvironmentManagedActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEnvironmentManagedActionsActionEnum action;
    public GetDescribeEnvironmentManagedActionsQueryParams withAction(GetDescribeEnvironmentManagedActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetDescribeEnvironmentManagedActionsQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDescribeEnvironmentManagedActionsQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetDescribeEnvironmentManagedActionsStatusEnum status;
    public GetDescribeEnvironmentManagedActionsQueryParams withStatus(GetDescribeEnvironmentManagedActionsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEnvironmentManagedActionsVersionEnum version;
    public GetDescribeEnvironmentManagedActionsQueryParams withVersion(GetDescribeEnvironmentManagedActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}