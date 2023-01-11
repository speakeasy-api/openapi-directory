package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelCatalogId")
    public String channelCatalogId;
    public GetChannelCatalogCategoriesPathParams withChannelCatalogId(String channelCatalogId) {
        this.channelCatalogId = channelCatalogId;
        return this;
    }
}