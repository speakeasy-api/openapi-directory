package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentsProgramOnboardingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=marketplace_id")
    public String marketplaceId;
    public GetPaymentsProgramOnboardingPathParams withMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payments_program_type")
    public String paymentsProgramType;
    public GetPaymentsProgramOnboardingPathParams withPaymentsProgramType(String paymentsProgramType) {
        this.paymentsProgramType = paymentsProgramType;
        return this;
    }
}