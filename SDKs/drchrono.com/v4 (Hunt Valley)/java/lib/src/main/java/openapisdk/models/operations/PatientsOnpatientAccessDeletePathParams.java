package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsOnpatientAccessDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsOnpatientAccessDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}