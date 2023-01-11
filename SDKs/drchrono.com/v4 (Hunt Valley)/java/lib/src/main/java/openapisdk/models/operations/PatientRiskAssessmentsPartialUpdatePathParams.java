package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientRiskAssessmentsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientRiskAssessmentsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}