package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInstrumentGroupsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPaymentInstrumentGroupsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}