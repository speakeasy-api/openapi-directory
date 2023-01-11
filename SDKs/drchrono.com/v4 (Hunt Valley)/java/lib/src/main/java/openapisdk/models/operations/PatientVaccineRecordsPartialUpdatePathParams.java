package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientVaccineRecordsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientVaccineRecordsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}