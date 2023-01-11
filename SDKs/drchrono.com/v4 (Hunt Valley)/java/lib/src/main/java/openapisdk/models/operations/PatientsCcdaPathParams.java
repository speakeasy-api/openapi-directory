package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientsCcdaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatientsCcdaPathParams withId(String id) {
        this.id = id;
        return this;
    }
}