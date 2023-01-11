package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderChangeReportingV3PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public Integer accountId;
    public GetOrderChangeReportingV3PathParams withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=beezUPOrderId")
    public String beezUPOrderId;
    public GetOrderChangeReportingV3PathParams withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public GetOrderChangeReportingV3PathParams withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderChangeExecutionUUID")
    public String orderChangeExecutionUUID;
    public GetOrderChangeReportingV3PathParams withOrderChangeExecutionUuid(String orderChangeExecutionUUID) {
        this.orderChangeExecutionUUID = orderChangeExecutionUUID;
        return this;
    }
}