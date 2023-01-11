package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SampleChannelDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelName")
    public String channelName;
    public SampleChannelDataPathParams withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}