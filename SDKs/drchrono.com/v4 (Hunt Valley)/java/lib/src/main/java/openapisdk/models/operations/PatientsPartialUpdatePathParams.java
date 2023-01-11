package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}