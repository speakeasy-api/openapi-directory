package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientRiskAssessmentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientRiskAssessmentsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}