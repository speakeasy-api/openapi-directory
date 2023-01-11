package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeConfigurationOptionsActionEnum action;
    public PostDescribeConfigurationOptionsQueryParams withAction(PostDescribeConfigurationOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeConfigurationOptionsVersionEnum version;
    public PostDescribeConfigurationOptionsQueryParams withVersion(PostDescribeConfigurationOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}