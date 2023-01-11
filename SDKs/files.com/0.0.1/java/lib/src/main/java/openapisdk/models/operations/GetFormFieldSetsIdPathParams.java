package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormFieldSetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetFormFieldSetsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}