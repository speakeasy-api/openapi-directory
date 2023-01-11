package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HeadOrderV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;
    public HeadOrderV3PathParams withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderId")
    public String beezUPOrderId;
    public HeadOrderV3PathParams withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public HeadOrderV3PathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}