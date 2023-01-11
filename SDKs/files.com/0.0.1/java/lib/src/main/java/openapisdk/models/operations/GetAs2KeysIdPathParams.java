package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAs2KeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetAs2KeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}