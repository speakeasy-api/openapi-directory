package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabTestsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}