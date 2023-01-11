package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MedicationsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MedicationsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}