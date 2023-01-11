package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBalanceAccountsIdPaymentInstrumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBalanceAccountsIdPaymentInstrumentsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}