package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabOrdersPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LabOrdersPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}