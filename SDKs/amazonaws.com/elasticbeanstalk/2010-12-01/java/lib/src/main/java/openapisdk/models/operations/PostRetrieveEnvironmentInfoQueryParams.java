package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRetrieveEnvironmentInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRetrieveEnvironmentInfoActionEnum action;
    public PostRetrieveEnvironmentInfoQueryParams withAction(PostRetrieveEnvironmentInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRetrieveEnvironmentInfoVersionEnum version;
    public PostRetrieveEnvironmentInfoQueryParams withVersion(PostRetrieveEnvironmentInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}