package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMessagesToChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public String channelId;
    public PublishMessagesToChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}