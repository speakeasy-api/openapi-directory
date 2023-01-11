package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMetadataOfChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public String channelId;
    public GetMetadataOfChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}