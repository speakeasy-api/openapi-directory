package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}