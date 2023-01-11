package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentManagedActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEnvironmentManagedActionsActionEnum action;
    public PostDescribeEnvironmentManagedActionsQueryParams withAction(PostDescribeEnvironmentManagedActionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEnvironmentManagedActionsVersionEnum version;
    public PostDescribeEnvironmentManagedActionsQueryParams withVersion(PostDescribeEnvironmentManagedActionsVersionEnum version) {
        this.version = version;
        return this;
    }
}