package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsOnpatientAccessReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsOnpatientAccessReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}