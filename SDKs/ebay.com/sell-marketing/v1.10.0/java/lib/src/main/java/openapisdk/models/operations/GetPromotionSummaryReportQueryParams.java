package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPromotionSummaryReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplace_id")
    public String marketplaceId;
    public GetPromotionSummaryReportQueryParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
}