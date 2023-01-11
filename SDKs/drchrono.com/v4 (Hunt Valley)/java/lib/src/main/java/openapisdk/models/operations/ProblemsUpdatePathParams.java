package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProblemsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ProblemsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}