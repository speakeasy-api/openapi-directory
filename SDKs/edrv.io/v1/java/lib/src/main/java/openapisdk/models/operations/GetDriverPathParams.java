package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDriverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDriverPathParams withId(String id) {
        this.id = id;
        return this;
    }
}