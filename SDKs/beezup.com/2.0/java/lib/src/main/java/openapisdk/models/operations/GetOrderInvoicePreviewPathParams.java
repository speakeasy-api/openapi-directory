package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoicePreviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetOrderInvoicePreviewPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderUUID")
    public String beezUPOrderUUID;
    public GetOrderInvoicePreviewPathParams withBeezUpOrderUuid(String beezUPOrderUUID) {
        this.beezUPOrderUUID = beezUPOrderUUID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public GetOrderInvoicePreviewPathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}