package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPaymentsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientPaymentsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}