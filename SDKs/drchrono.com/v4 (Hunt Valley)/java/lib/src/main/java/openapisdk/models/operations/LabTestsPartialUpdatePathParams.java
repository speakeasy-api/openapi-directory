package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabTestsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}