package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsSummaryReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}