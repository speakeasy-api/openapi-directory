package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabResultsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabResultsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}