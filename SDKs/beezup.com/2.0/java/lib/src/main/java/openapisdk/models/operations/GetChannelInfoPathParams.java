package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetChannelInfoPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}