package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInstrumentGroupsIdTransactionRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPaymentInstrumentGroupsIdTransactionRulesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}