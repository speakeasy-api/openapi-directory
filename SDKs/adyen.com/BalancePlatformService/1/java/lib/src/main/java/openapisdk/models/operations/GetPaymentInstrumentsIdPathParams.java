package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInstrumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPaymentInstrumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}