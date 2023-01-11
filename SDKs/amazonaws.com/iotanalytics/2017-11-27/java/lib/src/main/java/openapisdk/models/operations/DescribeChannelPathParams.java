package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelName")
    public String channelName;
    public DescribeChannelPathParams withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}