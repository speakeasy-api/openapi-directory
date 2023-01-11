package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfAspspsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetListOfAspspsQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}