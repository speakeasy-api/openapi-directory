package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceHistoryOfChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public String channelId;
    public GetPresenceHistoryOfChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}