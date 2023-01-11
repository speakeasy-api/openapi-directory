package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabTestsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabTestsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}