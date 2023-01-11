package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEngineDefaultParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEngineDefaultParametersActionEnum action;
    public PostDescribeEngineDefaultParametersQueryParams withAction(PostDescribeEngineDefaultParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEngineDefaultParametersVersionEnum version;
    public PostDescribeEngineDefaultParametersQueryParams withVersion(PostDescribeEngineDefaultParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}