package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProblemsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ProblemsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}