package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;
    public ChangeOrderPathParams withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderId")
    public String beezUPOrderId;
    public ChangeOrderPathParams withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeOrderType")
    public String changeOrderType;
    public ChangeOrderPathParams withChangeOrderType(String changeOrderType) {
        this.changeOrderType = changeOrderType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public ChangeOrderPathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}