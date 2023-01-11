package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsProgramPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetPaymentsProgramPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payments_program_type")
    public String paymentsProgramType;
    public GetPaymentsProgramPathParams withPaymentsProgramType(String paymentsProgramType) {
        this.paymentsProgramType = paymentsProgramType;
        return this;
    }
}