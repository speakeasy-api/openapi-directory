package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomPluginPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customPluginArn")
    public String customPluginArn;
    public DescribeCustomPluginPathParams withCustomPluginArn(String customPluginArn) {
        this.customPluginArn = customPluginArn;
        return this;
    }
}