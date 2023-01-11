package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoctorsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DoctorsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}