package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetLocationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}