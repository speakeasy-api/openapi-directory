package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProblemsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ProblemsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}