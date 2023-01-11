package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PaymentsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}