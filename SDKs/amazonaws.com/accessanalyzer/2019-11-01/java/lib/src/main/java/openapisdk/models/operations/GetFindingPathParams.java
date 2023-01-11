package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFindingPathParams withId(String id) {
        this.id = id;
        return this;
    }
}