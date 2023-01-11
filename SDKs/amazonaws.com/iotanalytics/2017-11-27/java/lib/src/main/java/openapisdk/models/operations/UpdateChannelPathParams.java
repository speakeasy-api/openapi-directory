package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelName")
    public String channelName;
    public UpdateChannelPathParams withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}