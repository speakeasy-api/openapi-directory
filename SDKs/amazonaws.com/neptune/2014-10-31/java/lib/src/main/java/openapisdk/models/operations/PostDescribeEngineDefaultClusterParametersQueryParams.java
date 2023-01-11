package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEngineDefaultClusterParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEngineDefaultClusterParametersActionEnum action;
    public PostDescribeEngineDefaultClusterParametersQueryParams withAction(PostDescribeEngineDefaultClusterParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEngineDefaultClusterParametersVersionEnum version;
    public PostDescribeEngineDefaultClusterParametersQueryParams withVersion(PostDescribeEngineDefaultClusterParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}