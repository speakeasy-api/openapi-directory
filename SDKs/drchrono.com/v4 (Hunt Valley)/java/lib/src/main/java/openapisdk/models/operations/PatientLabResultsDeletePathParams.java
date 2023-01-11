package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientLabResultsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientLabResultsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}