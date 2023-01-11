package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAbortEnvironmentUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAbortEnvironmentUpdateActionEnum action;
    public PostAbortEnvironmentUpdateQueryParams withAction(PostAbortEnvironmentUpdateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAbortEnvironmentUpdateVersionEnum version;
    public PostAbortEnvironmentUpdateQueryParams withVersion(PostAbortEnvironmentUpdateVersionEnum version) {
        this.version = version;
        return this;
    }
}