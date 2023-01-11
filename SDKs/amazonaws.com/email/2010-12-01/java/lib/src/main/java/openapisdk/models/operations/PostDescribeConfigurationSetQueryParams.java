package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeConfigurationSetActionEnum action;
    public PostDescribeConfigurationSetQueryParams withAction(PostDescribeConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeConfigurationSetVersionEnum version;
    public PostDescribeConfigurationSetQueryParams withVersion(PostDescribeConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}