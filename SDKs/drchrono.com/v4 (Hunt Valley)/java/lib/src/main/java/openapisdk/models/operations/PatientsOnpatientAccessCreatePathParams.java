package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsOnpatientAccessCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsOnpatientAccessCreatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}