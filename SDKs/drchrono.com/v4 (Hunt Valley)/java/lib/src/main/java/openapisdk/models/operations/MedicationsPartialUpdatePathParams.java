package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MedicationsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MedicationsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}