package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetActionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}