package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientVaccineRecordsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientVaccineRecordsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}