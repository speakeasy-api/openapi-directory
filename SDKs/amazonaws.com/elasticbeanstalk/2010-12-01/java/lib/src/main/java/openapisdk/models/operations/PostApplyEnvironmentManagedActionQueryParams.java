package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplyEnvironmentManagedActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostApplyEnvironmentManagedActionActionEnum action;
    public PostApplyEnvironmentManagedActionQueryParams withAction(PostApplyEnvironmentManagedActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostApplyEnvironmentManagedActionVersionEnum version;
    public PostApplyEnvironmentManagedActionQueryParams withVersion(PostApplyEnvironmentManagedActionVersionEnum version) {
        this.version = version;
        return this;
    }
}