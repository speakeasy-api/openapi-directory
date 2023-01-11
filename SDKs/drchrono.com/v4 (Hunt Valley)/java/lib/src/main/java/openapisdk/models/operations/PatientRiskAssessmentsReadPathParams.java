package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientRiskAssessmentsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientRiskAssessmentsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}