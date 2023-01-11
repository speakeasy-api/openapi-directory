package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PaymentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PaymentsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}