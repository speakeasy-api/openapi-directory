package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientVaccineRecordsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientVaccineRecordsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}