package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsSummaryUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}