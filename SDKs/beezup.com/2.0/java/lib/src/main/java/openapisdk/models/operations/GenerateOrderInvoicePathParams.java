package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateOrderInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GenerateOrderInvoicePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderUUID")
    public String beezUPOrderUUID;
    public GenerateOrderInvoicePathParams withBeezUpOrderUuid(String beezUPOrderUUID) {
        this.beezUPOrderUUID = beezUPOrderUUID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public GenerateOrderInvoicePathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}