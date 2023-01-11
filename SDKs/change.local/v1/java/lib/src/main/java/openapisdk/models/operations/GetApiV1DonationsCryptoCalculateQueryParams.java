package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1DonationsCryptoCalculateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Double count;
    public GetApiV1DonationsCryptoCalculateQueryParams withCount(Double count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public GetApiV1DonationsCryptoCalculateCurrencyEnum currency;
    public GetApiV1DonationsCryptoCalculateQueryParams withCurrency(GetApiV1DonationsCryptoCalculateCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}