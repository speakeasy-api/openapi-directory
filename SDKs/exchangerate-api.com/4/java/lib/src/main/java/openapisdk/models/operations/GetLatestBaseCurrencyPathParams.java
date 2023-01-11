package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestBaseCurrencyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=base_currency")
    public String baseCurrency;
    public GetLatestBaseCurrencyPathParams withBaseCurrency(String baseCurrency) {
        this.baseCurrency = baseCurrency;
        return this;
    }
}