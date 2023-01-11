package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelColumnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetChannelColumnsPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}