package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceOfChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public String channelId;
    public GetPresenceOfChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}