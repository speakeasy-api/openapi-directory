package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelName")
    public String channelName;
    public DeleteChannelPathParams withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
}