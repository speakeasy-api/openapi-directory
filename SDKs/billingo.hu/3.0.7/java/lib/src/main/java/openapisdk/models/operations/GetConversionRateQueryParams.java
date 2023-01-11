package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConversionRateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public openapisdk.models.shared.CurrencyEnum from;
    public GetConversionRateQueryParams withFrom(openapisdk.models.shared.CurrencyEnum from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public openapisdk.models.shared.CurrencyEnum to;
    public GetConversionRateQueryParams withTo(openapisdk.models.shared.CurrencyEnum to) {
        this.to = to;
        return this;
    }
}