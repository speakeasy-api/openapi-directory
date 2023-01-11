package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPaymentLogReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientPaymentLogReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}