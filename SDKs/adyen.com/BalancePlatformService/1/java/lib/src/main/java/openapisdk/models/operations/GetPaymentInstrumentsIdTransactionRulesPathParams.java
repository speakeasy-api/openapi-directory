package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInstrumentsIdTransactionRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPaymentInstrumentsIdTransactionRulesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}