package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptimiseByChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionName")
    public openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName;
    public OptimiseByChannelPathParams withActionName(openapisdk.models.shared.OptimisationActionNameGeneralParametersEnum actionName) {
        this.actionName = actionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public OptimiseByChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public OptimiseByChannelPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}