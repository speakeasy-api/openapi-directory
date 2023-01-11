package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public GetChannelCategoriesPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}