package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConsentFormsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ConsentFormsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}