package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;
    public GetOrderPathParams withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderId")
    public String beezUPOrderId;
    public GetOrderPathParams withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public GetOrderPathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}