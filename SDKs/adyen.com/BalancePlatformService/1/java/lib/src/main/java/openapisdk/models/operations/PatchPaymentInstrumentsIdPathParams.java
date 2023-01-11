package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchPaymentInstrumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchPaymentInstrumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}