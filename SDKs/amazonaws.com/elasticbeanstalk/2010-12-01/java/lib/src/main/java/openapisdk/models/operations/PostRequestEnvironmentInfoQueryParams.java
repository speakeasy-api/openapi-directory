package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestEnvironmentInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRequestEnvironmentInfoActionEnum action;
    public PostRequestEnvironmentInfoQueryParams withAction(PostRequestEnvironmentInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRequestEnvironmentInfoVersionEnum version;
    public PostRequestEnvironmentInfoQueryParams withVersion(PostRequestEnvironmentInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}