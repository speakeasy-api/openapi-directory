package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsSummaryDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsSummaryDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}