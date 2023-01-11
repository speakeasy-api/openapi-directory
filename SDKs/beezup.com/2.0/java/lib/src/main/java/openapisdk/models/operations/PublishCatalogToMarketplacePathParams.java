package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishCatalogToMarketplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;
    public PublishCatalogToMarketplacePathParams withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public PublishCatalogToMarketplacePathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}