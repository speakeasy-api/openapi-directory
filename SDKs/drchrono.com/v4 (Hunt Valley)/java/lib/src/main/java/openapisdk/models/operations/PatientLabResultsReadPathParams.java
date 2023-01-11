package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientLabResultsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientLabResultsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}