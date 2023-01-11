package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}