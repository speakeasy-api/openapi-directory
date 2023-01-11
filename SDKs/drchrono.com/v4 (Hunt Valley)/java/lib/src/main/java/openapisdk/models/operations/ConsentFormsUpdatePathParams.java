package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ConsentFormsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}